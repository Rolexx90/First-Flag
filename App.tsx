import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChallengeList from './components/ChallengeList';
import ChallengeDetail from './components/ChallengeDetail';
import StudyMaterials from './components/StudyMaterials';
import LoginPage from './components/LoginPage';
import Leaderboard from './components/Leaderboard';
import CommunityChat from './components/CommunityChat';
import { getChallenges, submitFlag as apiSubmitFlag } from './services/mockApiService';
import type { Challenge, User } from './types';

export type View = 'challenges' | 'study' | 'leaderboard' | 'community';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [view, setView] = useState<View>('challenges');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  useEffect(() => {
    // Check for a logged-in user in localStorage on initial load
    const savedUser = localStorage.getItem('ctf-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    // Fetch challenges from the mock API
    const fetchChallenges = async () => {
      const allChallenges = await getChallenges();
      setChallenges(allChallenges);
    };
    fetchChallenges();
  }, []);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
    localStorage.setItem('ctf-user', JSON.stringify(loggedInUser));
  };
  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('ctf-user');
    setView('challenges'); // Reset to default view on logout
    setSelectedChallenge(null);
  };

  const handleSelectChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleBackToList = () => {
    setSelectedChallenge(null);
  };
  
  const handleFlagSubmission = async (challengeId: number, flag: string): Promise<boolean> => {
    if (!user) return false;
    
    const result = await apiSubmitFlag(user.id, challengeId, flag);
    if (result.correct) {
      // Update user score and solved challenges
      const updatedUser: User = {
        ...user,
        score: user.score + result.points,
        solvedChallenges: [...user.solvedChallenges, challengeId],
      };
      setUser(updatedUser);
      localStorage.setItem('ctf-user', JSON.stringify(updatedUser));
      return true;
    }
    return false;
  };

  const renderContent = () => {
    if (selectedChallenge) {
      return (
        <ChallengeDetail 
          challenge={selectedChallenge} 
          onBack={handleBackToList}
          onSubmitFlag={handleFlagSubmission}
          isSolved={user?.solvedChallenges.includes(selectedChallenge.id) ?? false}
        />
      );
    }

    switch (view) {
      case 'challenges':
        return <ChallengeList challenges={challenges} onSelectChallenge={handleSelectChallenge} userSolvedChallenges={user?.solvedChallenges || []} />;
      case 'study':
        return <StudyMaterials />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'community':
        return user ? <CommunityChat currentUser={user} /> : null;
      default:
        return <ChallengeList challenges={challenges} onSelectChallenge={handleSelectChallenge} userSolvedChallenges={user?.solvedChallenges || []} />;
    }
  };

  if (!user) {
      return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="bg-cyber-bg min-h-screen text-cyber-text-secondary font-sans">
      <Header 
        user={user} 
        onLogout={handleLogout} 
        activeView={view}
        onNavigate={setView} 
      />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="text-center py-4 text-xs text-cyber-text-secondary/50">
        <p>First Flag - Your journey starts here.</p>
      </footer>
    </div>
  );
}

export default App;

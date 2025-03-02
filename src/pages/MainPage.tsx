import { useIssues } from '../app/store.ts';
import { useEffect } from 'react';
import { fetchIssues } from '../utils';

export const MainPage = () => {
  const issuesArray = useIssues(state => state.issues);
  const setIssues = useIssues(state => state.setIssues);

  useEffect(() => {
    fetchIssues('facebook/react').then(resp => setIssues(resp));
  }, []);

  console.log('Component re-rendered:', issuesArray);

  return <p>MainPage</p>;
};

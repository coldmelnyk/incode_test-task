import { create } from 'zustand'
import { Issue } from '../types';

interface IssuesState {
  issues: Issue[] | null;
  setIssues: (newIssues: Issue[]) => void;
}

export const useIssues = create<IssuesState>((set) => ({
  issues: null,
  setIssues: (newIssues: Issue[]) => set(() => ({ issues: newIssues })),
}))
import { create } from 'zustand'
import { Issue, Repo } from '../types';

interface RepoState {
  repo: Repo | null;
  issues: Issue[] | null;
  setRepo: (repo: Repo) => void;
  setIssues: (newIssues: Issue[]) => void;
}

export const useRepo = create<RepoState>((set) => ({
  repo: null,
  issues: null,
  setRepo: (newRepo: Repo) => set(() => ({ repo: newRepo })),
  setIssues: (newIssues: Issue[]) => set(() => ({ issues: newIssues })),
}))
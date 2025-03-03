import { create } from 'zustand'
import { Issue, Repo } from '../types';

interface RepoState {
  repo: Repo | null;
  openedIssues: Issue[] | null;
  openedAndAssignedIssues: Issue[] | null;
  closedIssues: Issue[] | null;
  setRepo: (repo: Repo) => void;
  setOpenedIssues: (newIssues: Issue[]) => void;
  setOpenedAndAssignedIssues: (newIssues: Issue[]) => void;
  setClosedIssues: (newIssues: Issue[]) => void;
}

export const useRepo = create<RepoState>((set) => ({
  repo: null,
  openedIssues: null,
  openedAndAssignedIssues: null,
  closedIssues: null,
  setRepo: (newRepo: Repo) => set(() => ({ repo: newRepo })),
  setOpenedIssues: (newIssues: Issue[]) => set(() => ({ openedIssues: newIssues })),
  setOpenedAndAssignedIssues: (newIssues: Issue[]) => set(() => ({ openedAndAssignedIssues: newIssues })),
  setClosedIssues: (newIssues: Issue[]) => set(() => ({ closedIssues: newIssues })),
}))
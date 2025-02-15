import {configureStore} from '@reduxjs/toolkit';
import {postMessageDispatcher} from './middlewares/postMessageDispatcher';
import {rootReducer} from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postMessageDispatcher),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type StatusMessageType = 'success' | 'error' | 'invisible';

export interface RootState {
  config: ExtensionConfig;
  shareableConfig: ShareableConfig;
  importError: boolean;
  importErrorMessage: string;
  scmInputBoxValue: string;
  recentCommits?: Commit[];
  recentCommitsLoading: boolean;
  textareaValue: string;
  tokenValues: {[name: string]: string};
  numberOfRepositories: number;
  selectedRepositoryPath: string;
  statusMessage: '';
  statusMessageType: StatusMessageType;
}

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsReducer } from './users/usersSlice';
import { filterReducer } from './users/usersSlice';
import { contactApi } from './contacts/contact-reduce';
import { authApi } from './auth';
import { authSlice } from './auth';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    // contact: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
    authApi.middleware,
  ],
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);

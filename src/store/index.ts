import { configureStore } from '@reduxjs/toolkit';
import { sectionReducer } from './reducers';

export const store = configureStore({
    reducer: {
        sections: sectionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

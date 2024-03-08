import { createSlice } from '@reduxjs/toolkit';

type NavLink = 'Home' | 'About Us' | 'Projects' | 'Services' | 'Contact Us';
export type ProjectMenuItem = 'All' | 'Commercial' | 'Residential' | 'Other';

type SectionState = {
    active: NavLink;
    projectActive: ProjectMenuItem;
};

const initialState: SectionState = {
    active: 'Home',
    projectActive: 'All',
};

const sectionSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        setProjectMenuItemActive: (state, action) => {
            state.projectActive = action.payload;
        },
    },
});

export const { setProjectMenuItemActive } = sectionSlice.actions;

export const sectionReducer = sectionSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

type NavLink = 'Home' | 'About Us' | 'Projects' | 'Services' | 'Contact Us';

type SectionState = {
    active: NavLink;
};

const initialState: SectionState = {
    active: 'Home',
};

const SectionSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {},
});

export const sectionReducer = SectionSlice.reducer;

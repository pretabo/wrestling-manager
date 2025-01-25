import React from 'react';
import { render, screen } from '@testing-library/react';
import AllWrestlers from './AllWrestlers';

describe('AllWrestlers Component', () => {
    it('renders without crashing', () => {
        render(<AllWrestlers />);
        expect(screen.getByText(/wrestlers/i)).toBeInTheDocument();
    });
});
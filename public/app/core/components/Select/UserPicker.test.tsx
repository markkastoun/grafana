import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { UserPicker } from './UserPicker';

jest.mock('@grafana/runtime', () => ({
  getBackendSrv: () => ({ get: jest.fn().mockResolvedValue([]) }),
}));

describe('UserPicker', () => {
  it('renders correctly', async () => {
    await act(async () => {
      render(<UserPicker onSelected={() => {}} />);
    });

    expect(screen.getByTestId('userPicker')).toBeInTheDocument();
  });
});

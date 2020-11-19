import React from 'react';
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Episodes from './Episodes';

test('render without errors', () => {
    render(<Episodes episodes={[]}/>)
})


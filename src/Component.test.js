import React from 'react'
import { act, render, waitFor } from '@testing-library/react-native'
import { Component } from './Component'
import * as trackingService from './services/tracking'

trackingService.trackEvent = jest.fn()

describe('Component', () => {
  test('Something is rendered after checking if a user exists', async () => {
    render(<Component />)

    // act(() => render(<Component />))
    // Error: Can't access .root on unmounted test renderer

    await waitFor(() => expect(trackingService.trackEvent).toHaveBeenCalled())
  })
})
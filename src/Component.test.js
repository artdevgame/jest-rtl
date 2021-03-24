import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import { Component } from './Component'
import * as trackingService from './services/tracking'

trackingService.trackEvent = jest.fn()

describe('Component', () => {
  test('Something is rendered after checking if a user exists', async () => {
    render(<Component />)

    await waitFor(() => expect(trackingService.trackEvent).toHaveBeenCalled())
  })
})
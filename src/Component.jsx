import React, { useCallback, useEffect, useState } from "react";
import { View } from 'react-native'
import * as trackingService from './services/tracking'
import * as userService from './services/user'

export function Component () {
  const [isRecognisedUser, setIsRecognisedUser] = useState(false)

  const onUserCheck = useCallback(async () => {
    const userExists = await userService.userExists();

    setIsRecognisedUser(userExists)

    trackingService.trackEvent('user_checked')
  }, [])

  useEffect(() => {
    onUserCheck();
  }, [])

  return (
    <View>User recognised: {isRecognisedUser}</View>
  )
}
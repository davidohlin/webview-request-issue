import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
  const _onShouldStartLoadWithRequest = request => {
    // On Android, this method won't trigger and the infinite.red page will load.
    // On iOS, the method is called and prevents the page from loading.
    return request.url.startsWith('https://reactnative.dev')
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
        onShouldStartLoadWithRequest={_onShouldStartLoadWithRequest}
        source={{ uri: 'https://infinite.red' }}
      />
    </View>
  )
}

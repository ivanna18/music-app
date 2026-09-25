import React from 'react';
import { Tabs } from 'expo-router';
import { Icon } from 'react-native-paper';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#121212', borderTopWidth: 0 },
        tabBarActiveTintColor: '#C6FF3A',
        tabBarInactiveTintColor: '#888',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="index" options={{ tabBarIcon: ({ color, size }) => <Icon source="home" color={color} size={size} /> }} />
      <Tabs.Screen name="explorar" options={{ tabBarIcon: ({ color, size }) => <Icon source="magnify" color={color} size={size} /> }} />
      <Tabs.Screen name="crear" options={{ tabBarIcon: ({ color, size }) => <Icon source="plus-circle-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="biblioteca" options={{ tabBarIcon: ({ color, size }) => <Icon source="view-grid-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="perfil" options={{ tabBarIcon: ({ color, size }) => <Icon source="account-outline" color={color} size={size} /> }} />
    </Tabs>
  );
}
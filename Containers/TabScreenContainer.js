import React from 'react'
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem
} from '@expo/ex-navigation'
import styles from './Styles'
import Router from '../Routes'

export default function TabScreen () {
  return (
    <TabNavigation
      id='main'
      navigatorUID='main'
      initialTab='schedule'
        >
      <TabItem
        id='schedule'
        title='Schedule'
        selectedStyle={styles.tabs.selected}
            >
        <StackNavigation
          id='schedule'
          navigatorUID='schedule'
          initialRoute={Router.getRoute('schedule')}
                />
      </TabItem>
      <TabItem
        id='exercises'
        title='Exercises'
        selectedStyle={styles.tabs.selected}
            >
        <StackNavigation
          id='exercises'
          navigatorUID='exercises'
          initialRoute={Router.getRoute('exercises')}
                />
      </TabItem>
      <TabItem
        id='absences'
        title='Absences'
        selectedStyle={styles.tabs.selected}
            >
        <StackNavigation
          id='absences'
          navigatorUID='absences'
          initialRoute={Router.getRoute('absences')}
                />
      </TabItem>
      <TabItem
        id='canteen'
        title='Canteen'
        selectedStyle={styles.tabs.selected}
            >
        <StackNavigation
          id='canteen'
          navigatorUID='canteen'
          initialRoute={Router.getRoute('canteen')}
                />
      </TabItem>
      <TabItem
        id='more'
        title='More'
        selectedStyle={styles.tabs.selected}
            >
        <StackNavigation
          id='more'
          navigatorUID='more'
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#fff'
            }
          }}
          initialRoute={Router.getRoute('more')}
                />
      </TabItem>

    </TabNavigation>
    )
}

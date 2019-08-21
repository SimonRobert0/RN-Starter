import 'react-native'
import React from 'react'
import Page1Component from '../component'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer' // eslint-disable-line

it('Page1 renders correctly', () => {
  const elem = renderer.create(<Page1Component />)
    .toJSON()
  expect(elem).toMatchSnapshot()
})

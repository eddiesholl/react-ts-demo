/* eslint complexity: ["error", 15] */
import { combineReducers } from 'redux'
import * as R from 'ramda'

import {
  RAISE_PROMPT_UNSAVED_CHANGES,
  CLEAR_PROMPT_UNSAVED_CHANGES,
  RAISE_EVENT,
  DISMISS_EVENT
} from './ui-action-types'

const UI_REQUESTED_TAB_ID = 'UI_REQUESTED_TAB_ID'
const UI_SHOW_PROMPT_UNSAVED_CHANGES = 'UI_SHOW_PROMPT_UNSAVED_CHANGES'

export const foo = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case RAISE_PROMPT_UNSAVED_CHANGES:
      return {
        ...state,
        [UI_REQUESTED_TAB_ID]: payload.nextTabId,
        [UI_SHOW_PROMPT_UNSAVED_CHANGES]: true
      }

    case CLEAR_PROMPT_UNSAVED_CHANGES:
      return {
        ...state,
        [UI_REQUESTED_TAB_ID]: undefined,
        [UI_SHOW_PROMPT_UNSAVED_CHANGES]: false
      }

    default:
      return state
  }
}

export const events = (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case RAISE_EVENT:
      return {
        ...state,
        [payload.name]: new Date()
      }

    case DISMISS_EVENT:
      return R.dissoc(payload.name, state)

    default:
      return state
  }
}

export default combineReducers({
  foo,
  events
})

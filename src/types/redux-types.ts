import { Action as ReduxAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface ActionProps {
  payload?: { [key: string]: any };
  type?: string;
}

export interface SimpleAction<Type extends string> extends ReduxAction<Type> {
  type: Type;
}

export interface Action<Type extends string, Payload = null> extends SimpleAction<Type> {
  payload: Payload;
}

export type Thunk = ThunkAction<void, { [key: string]: any }, void, any>;

export interface Payload {
  [key: string]: any;
}
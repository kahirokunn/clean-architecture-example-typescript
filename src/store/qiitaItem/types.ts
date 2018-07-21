import {IQiitaItem} from '../../entities/qiita/QiitaItem';

export enum Types {
  INIT_STATE = 'qiitaItem/init_state',
  SAVE_ITEMS = 'qiitaItem/save_items',
}

export const InitState = (): FluxStandardAction => ({type: Types.INIT_STATE})

export const SaveItems = (payload: IQiitaItem[]): FluxStandardAction => ({
  type: Types.SAVE_ITEMS,
  payload
})

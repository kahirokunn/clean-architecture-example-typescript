import {IQiitaItem} from '../../entities/qiita/QiitaItem';

export interface IInitialState {
  qiitaItems: IQiitaItem[]
}

export const initialState = (): IInitialState => {
  return {
    qiitaItems: []
  }
}

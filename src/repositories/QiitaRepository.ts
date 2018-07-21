import axios, { AxiosResponse } from 'axios';
import {IQiitaItem} from '@/entities/qiita/QiitaItem';
import BaseRepository from '@/repositories/BaseRepository';

export interface IFetchItemsArgment {
  userName: string;
}

export type IQiitaRepository = BaseRepository & {
  fetchItems: ({ userName }: IFetchItemsArgment) => Promise<IQiitaItem[]>;
  saveItems: (params : IQiitaItem[]) => void;
}

export default class QiitaRepository implements IQiitaRepository {

  constructor() {};

  async fetchItems({ userName }: IFetchItemsArgment) : Promise<IQiitaItem[]>
  {
    try {
      const response: AxiosResponse = await axios
      .get<IQiitaItem[]>(`https://qiita.com/api/v2/users/${userName}/items`);

      const qiitaItems = response.data;
      return qiitaItems;
    } catch(e) {
      console.log('通信に失敗しました。', e);
    }
    return [];
  }

  saveItems(params : IQiitaItem[]) {
    console.log(params);
  };

}

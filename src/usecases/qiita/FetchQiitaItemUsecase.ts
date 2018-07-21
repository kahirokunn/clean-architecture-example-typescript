import {IQiitaItem} from '../../entities/qiita/QiitaItem';
import BaseUseCase from '../../usecases/BaseUseCase';
import QiitaRepository, { IFetchItemsArgment, IQiitaRepository } from '../../repositories/QiitaRepository';

export interface IConstructorArgment extends IFetchItemsArgment {
  repository: IQiitaRepository;
}

export default class LoadQiitaUserItemUsecase implements BaseUseCase {
  qiitaArgment: IFetchItemsArgment;
  repository: IQiitaRepository;

  constructor({ userName, repository }: IConstructorArgment) {
    this.qiitaArgment = { userName };
    this.repository = repository;
  };

  async execute() {
    const qiitaItems: IQiitaItem[] = await this.repository.fetchItems(this.qiitaArgment);
    this.repository.saveItems(qiitaItems);
  };

}

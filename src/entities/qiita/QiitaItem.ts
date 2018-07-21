import {IUser} from '@/entities/qiita/User';
import {IGroup} from '@/entities/qiita/Group';

export interface ITag {
  name : string;
  versions : string[];
}

export interface IQiitaItem {
  id : string;
  renderedBody : string;
  body : string;
  coediting : boolean;
  commentsCount : number;
  createdAt : Date;
  group?: IGroup;
  likesCount : number;
  private : boolean;
  reactionsCount : number;
  tags : ITag[];
  title : string;
  updatedAt : Date;
  url : string;
  user : IUser;
  pageViewsCount?: number;
}

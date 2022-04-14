import { ITodo } from '@hooks/atoms';

export interface IUser {
  id: number;
  nickname: string;
  email: string;
  Workspaces: IWorkspace[];
}

export interface IUserWithOnline extends IUser {
  online: boolean;
}

export interface IChannel {
  id: number;
  name: string;
  private: boolean;
  WorkspaceId: number;
}

export interface IChat {
  id: number;
  UserId: number;
  User: IUser;
  content: string;
  createdAt: Date;
  ChannelId: number;
  Channel: IChannel;
}

export interface IDM {
  id: number;
  SenderId: number;
  Sender: IUser;
  ReceiverId: number;
  Receiver: IUser;
  content: string;
  createdAt: Date;
}

export interface IWorkspace {
  id: number;
  name: string;
  url: string;
  OwnerId: number;
}

export interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
  idx: number;
}

export interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

export interface iDraggableCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
export interface IOreum {
  id: number;
  title: string;
  place: string;
  vigo: number;
  pyogo: number;
  longitude: number;
  latitude: number;
  explain: string;
  image: string;
}

export interface IOreumState {
  title: string;
  description: string;
  simpledec: string;
  area: any;
  email: string;
  img: string;
  id: number;
}

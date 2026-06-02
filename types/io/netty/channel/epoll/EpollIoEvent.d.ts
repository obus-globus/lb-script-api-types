import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { EpollIoOps } from '../../../../io/netty/channel/epoll/EpollIoOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EpollIoEvent extends IoEvent, Object{
    ops(): EpollIoOps;
}
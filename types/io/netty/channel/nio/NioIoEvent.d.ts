import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { NioIoOps } from '../../../../io/netty/channel/nio/NioIoOps.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NioIoEvent extends IoEvent, Object{
    ops(): NioIoOps;
}
import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface KQueueIoHandle extends IoHandle, Object{
    ident(): number;
    registered(): void;
    unregistered(): void;
}
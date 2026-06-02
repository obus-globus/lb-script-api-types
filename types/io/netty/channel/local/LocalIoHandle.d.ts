import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LocalIoHandle extends IoHandle, Object{
    closeNow(): void;
    registered(): void;
    unregistered(): void;
}
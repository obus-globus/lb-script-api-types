import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EpollIoHandle extends IoHandle, Object{
    fd(): FileDescriptor;
    registered(): void;
    unregistered(): void;
}
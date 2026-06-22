import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { IoHandle } from '../../../../io/netty/channel/IoHandle.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EpollIoHandle extends IoHandle, Object{
    close(): void;
    fd(): FileDescriptor;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    registered(): void;
    unregistered(): void;
}
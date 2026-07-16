import type { EpollEventArray } from '../../../../io/netty/channel/epoll/EpollEventArray.d.ts'
import type { NativeDatagramPacketArray$NativeDatagramPacket } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray$NativeDatagramPacket.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Native extends Object {
    static EPOLLERR: number;
    static EPOLLET: number;
    static EPOLLIN: number;
    static EPOLLOUT: number;
    static EPOLLRDHUP: number;
    static IS_SUPPORTING_SENDMMSG: boolean;
    static IS_SUPPORTING_TCP_FASTOPEN: boolean;
    static KERNEL_VERSION: string;
    static TCP_MD5SIG_MAXKEYLEN: number;
    static epollBusyWait(paramarg0: FileDescriptor, paramarg1: EpollEventArray): number;
    static epollCtlAdd(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static epollCtlDel(paramarg0: number, paramarg1: number): void;
    static epollCtlMod(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static epollWait(paramarg0: FileDescriptor, paramarg1: EpollEventArray, paramarg2: FileDescriptor, paramarg3: number, paramarg4: number): number;
    static eventFdRead(paramarg0: number): void;
    static eventFdWrite(paramarg0: number, paramarg1: number): void;
    static newEpollCreate(): FileDescriptor;
    static newEventFd(): FileDescriptor;
    static newTimerFd(): FileDescriptor;
    static offsetofEpollData(): number;
    static sendmmsg(paramarg0: number, paramarg1: NativeDatagramPacketArray$NativeDatagramPacket[], paramarg2: number, paramarg3: number): number;
    static sizeofEpollEvent(): number;
    static splice(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    private constructor()
}
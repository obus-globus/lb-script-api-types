import type { Channel$Unsafe } from '../../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AbstractNioChannel$NioUnsafe extends Channel$Unsafe, Object{
    ch(): SelectableChannel;
    finishConnect(): void;
    forceFlush(): void;
    read(): void;
}
import type { NativeDatagramPacketArray$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ChannelOutboundBuffer$MessageProcessor } from '../../../../io/netty/channel/ChannelOutboundBuffer$MessageProcessor.d.ts'
import type { NativeDatagramPacketArray } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeDatagramPacketArray$MyMessageProcessor extends Object implements ChannelOutboundBuffer$MessageProcessor {
    private constructor(null_: NativeDatagramPacketArray)
    constructor(null_: NativeDatagramPacketArray, arg1: NativeDatagramPacketArray$1)
    // private connected: boolean;
    // private maxMessagesPerWrite: number;
    processMessage(arg0: Object): boolean;
}
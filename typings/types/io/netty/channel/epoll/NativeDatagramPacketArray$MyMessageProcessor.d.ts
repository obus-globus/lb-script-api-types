import type { ChannelOutboundBuffer$MessageProcessor } from '../../../../io/netty/channel/ChannelOutboundBuffer$MessageProcessor.d.ts'
import type { NativeDatagramPacketArray } from '../../../../io/netty/channel/epoll/NativeDatagramPacketArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeDatagramPacketArray$MyMessageProcessor extends Object implements ChannelOutboundBuffer$MessageProcessor {
    constructor(null_: NativeDatagramPacketArray, arg1: any)
    // private connected: boolean;
    // private maxMessagesPerWrite: number;
    processMessage(arg0: Object): boolean;
}
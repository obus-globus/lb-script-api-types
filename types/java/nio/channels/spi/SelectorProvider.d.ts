import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { Channel } from '../../../../java/nio/channels/Channel.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { Pipe } from '../../../../java/nio/channels/Pipe.d.ts'
import type { ServerSocketChannel } from '../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { AbstractSelector } from '../../../../java/nio/channels/spi/AbstractSelector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class SelectorProvider extends Object {
    static provider(): SelectorProvider;
    constructor()
    inheritedChannel(): Channel;
    openDatagramChannel(): DatagramChannel;
    openDatagramChannel(arg0: ProtocolFamily): DatagramChannel;
    openPipe(): Pipe;
    openSelector(): AbstractSelector;
    openServerSocketChannel(): ServerSocketChannel;
    openServerSocketChannel(arg0: ProtocolFamily): ServerSocketChannel;
    openSocketChannel(): SocketChannel;
    openSocketChannel(arg0: ProtocolFamily): SocketChannel;
}
import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { SocketChannel } from '../../../../java/nio/channels/SocketChannel.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
import type { AFUNIXSocket } from '../../../../org/newsclub/net/unix/AFUNIXSocket.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketCredentials } from '../../../../org/newsclub/net/unix/AFUNIXSocketCredentials.d.ts'
import type { AFUNIXSocketExtensions } from '../../../../org/newsclub/net/unix/AFUNIXSocketExtensions.d.ts'
export class AFUNIXSocketChannel extends AFSocketChannel<AFUNIXSocketAddress> implements AFUNIXSocketExtensions {
    static open(): SocketChannel;
    static open(paramarg0: SocketAddress): SocketChannel;
    static open(paramarg0: ProtocolFamily): SocketChannel;
    static open(): AFUNIXSocketChannel;
    static open(paramarg0: SocketAddress): AFUNIXSocketChannel;
    constructor(arg0: AFUNIXSocket)
    clearReceivedFileDescriptors(): void;
    getPeerCredentials(): AFUNIXSocketCredentials;
    getReceivedFileDescriptors(): FileDescriptor[];
    hasOutboundFileDescriptors(): boolean;
    setOutboundFileDescriptors(arg0: FileDescriptor[]): void;
}
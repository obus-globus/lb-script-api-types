import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { DatagramChannel } from '../../../../java/nio/channels/DatagramChannel.d.ts'
import type { AFDatagramChannel } from '../../../../org/newsclub/net/unix/AFDatagramChannel.d.ts'
import type { AFUNIXDatagramSocket } from '../../../../org/newsclub/net/unix/AFUNIXDatagramSocket.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketCredentials } from '../../../../org/newsclub/net/unix/AFUNIXSocketCredentials.d.ts'
import type { AFUNIXSocketExtensions } from '../../../../org/newsclub/net/unix/AFUNIXSocketExtensions.d.ts'
export class AFUNIXDatagramChannel extends AFDatagramChannel<AFUNIXSocketAddress> implements AFUNIXSocketExtensions {
    static open(): DatagramChannel;
    static open(paramarg0: ProtocolFamily): DatagramChannel;
    static open(): AFUNIXDatagramChannel;
    static open(paramarg0: ProtocolFamily): AFUNIXDatagramChannel;
    constructor(arg0: AFUNIXDatagramSocket)
    clearReceivedFileDescriptors(): void;
    getPeerCredentials(): AFUNIXSocketCredentials;
    getReceivedFileDescriptors(): FileDescriptor[];
    hasOutboundFileDescriptors(): boolean;
    setOutboundFileDescriptors(...arg0: FileDescriptor[]): void;
}
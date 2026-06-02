import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { DatagramSocketImplFactory } from '../../../../java/net/DatagramSocketImplFactory.d.ts'
import type { AFDatagramSocket } from '../../../../org/newsclub/net/unix/AFDatagramSocket.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { AFUNIXDatagramChannel } from '../../../../org/newsclub/net/unix/AFUNIXDatagramChannel.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketCredentials } from '../../../../org/newsclub/net/unix/AFUNIXSocketCredentials.d.ts'
import type { AFUNIXSocketExtensions } from '../../../../org/newsclub/net/unix/AFUNIXSocketExtensions.d.ts'
export class AFUNIXDatagramSocket extends AFDatagramSocket<AFUNIXSocketAddress> implements AFUNIXSocketExtensions {
    static newInstance(): AFUNIXDatagramSocket;
    static newInstance(paramarg0: AFSocketType): AFUNIXDatagramSocket;
    static setDatagramSocketImplFactory(paramarg0: DatagramSocketImplFactory): void;
    constructor(arg0: FileDescriptor)
    private constructor(arg0: FileDescriptor, arg1: AFSocketType)
    clearReceivedFileDescriptors(): void;
    getChannel(): AFUNIXDatagramChannel;
    getPeerCredentials(): AFUNIXSocketCredentials;
    getReceivedFileDescriptors(): FileDescriptor[];
    hasOutboundFileDescriptors(): boolean;
    newChannel(): AFUNIXDatagramChannel;
    newDatagramSocketInstance(): AFDatagramSocket<AFUNIXSocketAddress>;
    setOutboundFileDescriptors(arg0: FileDescriptor[]): void;
}
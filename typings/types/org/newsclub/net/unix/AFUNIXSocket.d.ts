import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketImplFactory } from '../../../../java/net/SocketImplFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketCapability } from '../../../../org/newsclub/net/unix/AFSocketCapability.d.ts'
import type { AFSocketFactory } from '../../../../org/newsclub/net/unix/AFSocketFactory.d.ts'
import type { AFUNIXSocketAddress } from '../../../../org/newsclub/net/unix/AFUNIXSocketAddress.d.ts'
import type { AFUNIXSocketCapability } from '../../../../org/newsclub/net/unix/AFUNIXSocketCapability.d.ts'
import type { AFUNIXSocketChannel } from '../../../../org/newsclub/net/unix/AFUNIXSocketChannel.d.ts'
import type { AFUNIXSocketCredentials } from '../../../../org/newsclub/net/unix/AFUNIXSocketCredentials.d.ts'
import type { AFUNIXSocketExtensions } from '../../../../org/newsclub/net/unix/AFUNIXSocketExtensions.d.ts'
export class AFUNIXSocket extends AFSocket<AFUNIXSocketAddress> implements AFUNIXSocketExtensions {
    static connectTo(paramarg0: AFSocketAddress | null): AFSocket<any>;
    static connectTo(paramarg0: AFUNIXSocketAddress): AFUNIXSocket;
    static ensureSupported(): void;
    static ensureUnsafeSupported(): void;
    static getLoadedLibrary(): string;
    static getVersion(): string;
    static isRunningOnAndroid(): boolean;
    static isSupported(): boolean;
    static main(paramarg0: (Object | null)[]): void;
    static newInstance(): AFUNIXSocket;
    static newStrictInstance(): AFUNIXSocket;
    static setSocketImplFactory(paramarg0: SocketImplFactory): void;
    static supports(paramarg0: AFSocketCapability): boolean;
    static supports(paramarg0: AFUNIXSocketCapability): boolean;
    constructor(arg0: FileDescriptor, arg1: AFSocketFactory<AFUNIXSocketAddress>)
    clearReceivedFileDescriptors(): void;
    getChannel(): AFUNIXSocketChannel;
    getPeerCredentials(): AFUNIXSocketCredentials;
    getReceivedFileDescriptors(): FileDescriptor[];
    hasOutboundFileDescriptors(): boolean;
    newChannel(): AFUNIXSocketChannel;
    setOutboundFileDescriptors(arg0: FileDescriptor[]): void;
}
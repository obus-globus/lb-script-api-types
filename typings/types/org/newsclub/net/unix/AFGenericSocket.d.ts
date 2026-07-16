import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { SocketImplFactory } from '../../../../java/net/SocketImplFactory.d.ts'
import type { AFGenericSocketAddress } from '../../../../org/newsclub/net/unix/AFGenericSocketAddress.d.ts'
import type { AFGenericSocketChannel } from '../../../../org/newsclub/net/unix/AFGenericSocketChannel.d.ts'
import type { AFGenericSocketExtensions } from '../../../../org/newsclub/net/unix/AFGenericSocketExtensions.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketCapability } from '../../../../org/newsclub/net/unix/AFSocketCapability.d.ts'
import type { AFSocketFactory } from '../../../../org/newsclub/net/unix/AFSocketFactory.d.ts'
import type { AFUNIXSocketCapability } from '../../../../org/newsclub/net/unix/AFUNIXSocketCapability.d.ts'
export class AFGenericSocket extends AFSocket<AFGenericSocketAddress> implements AFGenericSocketExtensions {
    static connectTo<A extends AFSocketAddress>(paramarg0: A): AFSocket<any>;
    static connectTo(paramarg0: AFGenericSocketAddress): AFGenericSocket;
    static ensureSupported(): void;
    static ensureUnsafeSupported(): void;
    static getLoadedLibrary(): string;
    static getVersion(): string;
    static isRunningOnAndroid(): boolean;
    static isSupported(): boolean;
    static newInstance(): AFGenericSocket;
    static newStrictInstance(): AFGenericSocket;
    static setSocketImplFactory(paramarg0: SocketImplFactory): void;
    static supports(paramarg0: AFSocketCapability): boolean;
    static supports(paramarg0: AFUNIXSocketCapability): boolean;
    constructor(arg0: FileDescriptor, arg1: AFSocketFactory<AFGenericSocketAddress>)
    getChannel(): AFGenericSocketChannel;
    newChannel(): AFGenericSocketChannel;
}
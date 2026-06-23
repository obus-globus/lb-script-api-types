import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { SelectorProvider } from '../../../../java/nio/channels/spi/SelectorProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamilyConfig } from '../../../../org/newsclub/net/unix/AFAddressFamilyConfig.d.ts'
import type { AFServerSocket } from '../../../../org/newsclub/net/unix/AFServerSocket.d.ts'
import type { AFServerSocket$Constructor } from '../../../../org/newsclub/net/unix/AFServerSocket$Constructor.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocket$Constructor } from '../../../../org/newsclub/net/unix/AFSocket$Constructor.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFSocketAddress$AFSocketAddressConstructor } from '../../../../org/newsclub/net/unix/AFSocketAddress$AFSocketAddressConstructor.d.ts'
import type { AFSocketAddressConfig } from '../../../../org/newsclub/net/unix/AFSocketAddressConfig.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
import type { AFSocketFactory } from '../../../../org/newsclub/net/unix/AFSocketFactory.d.ts'
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class AFAddressFamily<A extends AFSocketAddress> extends Object {
    static registerAddressFamily(paramarg0: string, paramarg1: Class<AFSocketAddress>, paramarg2: AFSocketAddressConfig<AFSocketAddress>): AFAddressFamily<AFSocketAddress>;
    static registerAddressFamilyImpl(paramarg0: string, paramarg1: AFAddressFamily<AFSocketAddress>, paramarg2: AFAddressFamilyConfig<AFSocketAddress>): AFAddressFamily<AFSocketAddress>;
    static uriSchemes(): string[];
    private constructor(arg0: string, arg1: number, arg2: string)
    // private addressClass: Class<A>;
    // private addressClassname: string;
    // private addressConfig: AFSocketAddressConfig<A>;
    // private addressConstructor: (param0: number, param1: number[], param2: ObjectPool$Lease<ByteBuffer>) => A;
    // private domain: number;
    // private juxInetAddressSuffix: string;
    // private juxString: string;
    readonly selectorProvider: SelectorProvider;
    // private selectorProviderClassname: string;
    // private serverSocketConstructor: AFServerSocket$Constructor<A>;
    // private socketConstructor: (param0: FileDescriptor, param1: AFSocketFactory<A>) => AFSocket<A>;
    // private checkProvider(): void;
    getAddressConstructor(): (param0: number, param1: number[], param2: ObjectPool$Lease<ByteBuffer>) => A;
    getDomain(): number;
    getJuxInetAddressSuffix(): string;
    getJuxString(): string;
    getSelectorProvider(): SelectorProvider;
    getServerSocketConstructor(): AFServerSocket$Constructor<A>;
    getSocketAddressClass(): Class<A>;
    getSocketConstructor(): (param0: FileDescriptor, param1: AFSocketFactory<A>) => AFSocket<A>;
    initImplExtensions(arg0: AncillaryDataSupport): AFSocketImplExtensions<A>;
    newServerSocket(): AFServerSocket<any>;
    newServerSocketChannel(): AFServerSocketChannel<any>;
    newSocket(): AFSocket<any>;
    newSocketChannel(): AFSocketChannel<any>;
    nullBindAddress(): SocketAddress;
    parseURI(arg0: URI, arg1: number): AFSocketAddress;
}
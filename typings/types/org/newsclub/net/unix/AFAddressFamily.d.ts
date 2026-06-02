import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
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
import type { AFSocketImplExtensions } from '../../../../org/newsclub/net/unix/AFSocketImplExtensions.d.ts'
import type { AncillaryDataSupport } from '../../../../org/newsclub/net/unix/AncillaryDataSupport.d.ts'
export class AFAddressFamily<A extends AFSocketAddress> extends Object {
    static registerAddressFamily(paramarg0: string, paramarg1: Class<Object>, paramarg2: AFSocketAddressConfig<Object>): AFAddressFamily<Object>;
    static registerAddressFamilyImpl(paramarg0: string, paramarg1: AFAddressFamily<Object>, paramarg2: AFAddressFamilyConfig<Object>): AFAddressFamily<Object>;
    static uriSchemes(): string[];
    private constructor(arg0: string, arg1: number, arg2: string)
    // private addressClass: Class<A>;
    // private addressClassname: string;
    // private addressConfig: AFSocketAddressConfig<A>;
    // private addressConstructor: (param0: A, param1: number, param2: number[]) => unknown;
    // private domain: number;
    // private juxInetAddressSuffix: string;
    // private juxString: string;
    readonly selectorProvider: SelectorProvider;
    // private selectorProviderClassname: string;
    // private serverSocketConstructor: AFServerSocket$Constructor<A>;
    // private socketConstructor: (param0: A, param1: FileDescriptor) => org.newsclub.net.unix.AFSocket<unknown>;
    // private checkProvider(): void;
    getAddressConstructor(): (param0: A, param1: number, param2: number[]) => unknown;
    getDomain(): number;
    getJuxInetAddressSuffix(): string;
    getJuxString(): string;
    getSelectorProvider(): SelectorProvider;
    getServerSocketConstructor(): AFServerSocket$Constructor<A>;
    getSocketAddressClass(): Class<A>;
    getSocketConstructor(): (param0: A, param1: FileDescriptor) => org.newsclub.net.unix.AFSocket<unknown>;
    initImplExtensions(arg0: AncillaryDataSupport): AFSocketImplExtensions<A>;
    newServerSocket(): AFServerSocket<Object>;
    newServerSocketChannel(): AFServerSocketChannel<Object>;
    newSocket(): AFSocket<Object>;
    newSocketChannel(): AFSocketChannel<Object>;
    nullBindAddress(): SocketAddress;
    parseURI(arg0: URI, arg1: number): AFSocketAddress;
}
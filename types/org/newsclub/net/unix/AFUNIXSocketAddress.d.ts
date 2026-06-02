import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFUNIXServerSocket } from '../../../../org/newsclub/net/unix/AFUNIXServerSocket.d.ts'
import type { AFUNIXSocket } from '../../../../org/newsclub/net/unix/AFUNIXSocket.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class AFUNIXSocketAddress extends AFSocketAddress {
    static addressCharset(): Charset;
    static addressFamily(): AFAddressFamily<AFUNIXSocketAddress>;
    static canMap(paramarg0: SocketAddress): boolean;
    static canMap(paramarg0: SocketAddress, paramarg1: Class<Object>): boolean;
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    static inAbstractNamespace(paramarg0: string): AFUNIXSocketAddress;
    static inAbstractNamespace(paramarg0: string, paramarg1: number): AFUNIXSocketAddress;
    static isSupportedAddress(paramarg0: InetAddress): boolean;
    static isSupportedAddress(paramarg0: SocketAddress): boolean;
    static mapOrFail(paramarg0: SocketAddress, paramarg1: Class<Object>): Object | null;
    static mapOrFail(paramarg0: SocketAddress): AFSocketAddress;
    static of(paramarg0: URI): AFSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFSocketAddress;
    static of(paramarg0: number[]): AFUNIXSocketAddress;
    static of(paramarg0: number[], paramarg1: number): AFUNIXSocketAddress;
    static of(paramarg0: File): AFUNIXSocketAddress;
    static of(paramarg0: File, paramarg1: number): AFUNIXSocketAddress;
    static of(paramarg0: SocketAddress): AFUNIXSocketAddress;
    static of(paramarg0: URI): AFUNIXSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFUNIXSocketAddress;
    static of(paramarg0: Path[][]): AFUNIXSocketAddress;
    static of(paramarg0: Path[][], paramarg1: number): AFUNIXSocketAddress;
    static ofNewTempFile(): AFUNIXSocketAddress;
    static ofNewTempPath(paramarg0: number): AFUNIXSocketAddress;
    static unwrap(paramarg0: string, paramarg1: number): AFUNIXSocketAddress;
    static unwrap(paramarg0: InetAddress, paramarg1: number): AFUNIXSocketAddress;
    static unwrap(paramarg0: SocketAddress): AFUNIXSocketAddress;
    constructor(arg0: File)
    constructor(arg0: File, arg1: number)
    private constructor(arg0: number, arg1: number[], arg2: ObjectPool$Lease<ByteBuffer>)
    getFile(): File;
    getPath(): string;
    getPathAsBytes(): number[];
    hasFilename(): boolean;
    isInAbstractNamespace(): boolean;
    newBoundServerSocket(): AFUNIXServerSocket;
    newConnectedSocket(): AFUNIXSocket;
    newForceBoundServerSocket(): AFUNIXServerSocket;
    toString(): string;
    toURI(arg0: string, arg1: URI): URI;
}
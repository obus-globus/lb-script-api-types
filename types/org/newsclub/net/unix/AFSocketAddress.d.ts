import type { File } from '../../../../java/io/File.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFServerSocket } from '../../../../org/newsclub/net/unix/AFServerSocket.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketProtocol } from '../../../../org/newsclub/net/unix/AFSocketProtocol.d.ts'
import type { AFSocketType } from '../../../../org/newsclub/net/unix/AFSocketType.d.ts'
import type { SentinelSocketAddress } from '../../../../org/newsclub/net/unix/SentinelSocketAddress.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export abstract class AFSocketAddress extends InetSocketAddress {
    static canMap(paramarg0: SocketAddress): boolean;
    static canMap(paramarg0: SocketAddress, paramarg1: Class<Object>): boolean;
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    static mapOrFail(paramarg0: SocketAddress, paramarg1: Class<Object>): Object | null;
    static mapOrFail(paramarg0: SocketAddress): AFSocketAddress;
    static of(paramarg0: URI): AFSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFSocketAddress;
    constructor(arg0: Class<SentinelSocketAddress>, arg1: number)
    constructor(arg0: number, arg1: number[], arg2: ObjectPool$Lease<ByteBuffer>, arg3: AFAddressFamily<Object>)
    readonly addressFamily: AFAddressFamily<Object>;
    // private bytes: number[];
    // private inetAddress: InetAddress;
    // private nativeAddress: ByteBuffer;
    covers(arg0: AFSocketAddress): boolean;
    getAddressFamily(): AFAddressFamily<Object>;
    getBytes(): number[];
    getFile(): File;
    getInetAddress(): InetAddress;
    getInetAddress(arg0: AFAddressFamily<Object>): InetAddress;
    getNativeAddressDirectBuffer(): ObjectPool$Lease<ByteBuffer>;
    hasFilename(): boolean;
    newBoundServerSocket(): AFServerSocket<Object>;
    newConnectedSocket(): AFSocket<Object>;
    newForceBoundServerSocket(): AFServerSocket<Object>;
    // private readObject(arg0: ObjectInputStream): void;
    toSocatAddressString(arg0: AFSocketType, arg1: AFSocketProtocol): string;
    toURI(arg0: string, arg1: URI): URI;
    wrapAddress(): InetAddress;
    writeNativeAddressTo(arg0: ByteBuffer): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
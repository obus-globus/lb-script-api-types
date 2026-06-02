import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class AFVSOCKSocketAddress extends AFSocketAddress {
    static VMADDR_CID_ANY: number;
    static VMADDR_CID_HOST: number;
    static VMADDR_CID_HYPERVISOR: number;
    static VMADDR_CID_LOCAL: number;
    static VMADDR_PORT_ANY: number;
    static addressFamily(): AFAddressFamily<AFVSOCKSocketAddress>;
    static canMap(paramarg0: SocketAddress): boolean;
    static canMap(paramarg0: SocketAddress, paramarg1: Class<Object>): boolean;
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    static isSupportedAddress(paramarg0: InetAddress): boolean;
    static isSupportedAddress(paramarg0: SocketAddress): boolean;
    static mapOrFail(paramarg0: SocketAddress, paramarg1: Class<Object>): Object | null;
    static mapOrFail(paramarg0: SocketAddress): AFSocketAddress;
    static of(paramarg0: URI): AFSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFSocketAddress;
    static of(paramarg0: URI): AFVSOCKSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFVSOCKSocketAddress;
    static ofAnyHostPort(): AFVSOCKSocketAddress;
    static ofAnyHypervisorPort(): AFVSOCKSocketAddress;
    static ofAnyLocalPort(): AFVSOCKSocketAddress;
    static ofAnyPort(): AFVSOCKSocketAddress;
    static ofHostPort(paramarg0: number): AFVSOCKSocketAddress;
    static ofHypervisorPort(paramarg0: number): AFVSOCKSocketAddress;
    static ofLocalPort(paramarg0: number): AFVSOCKSocketAddress;
    static ofPortAndCID(paramarg0: number, paramarg1: number): AFVSOCKSocketAddress;
    static ofPortAndCID(paramarg0: number, paramarg1: number, paramarg2: number): AFVSOCKSocketAddress;
    static ofPortWithAnyCID(paramarg0: number): AFVSOCKSocketAddress;
    static unwrap(paramarg0: string, paramarg1: number): AFVSOCKSocketAddress;
    static unwrap(paramarg0: InetAddress, paramarg1: number): AFVSOCKSocketAddress;
    static unwrap(paramarg0: SocketAddress): AFVSOCKSocketAddress;
    private constructor(arg0: number, arg1: number[], arg2: ObjectPool$Lease<ByteBuffer>)
    covers(arg0: AFSocketAddress): boolean;
    getFile(): File;
    getVSOCKCID(): number;
    getVSOCKPort(): number;
    getVSOCKReserved1(): number;
    hasFilename(): boolean;
    toString(): string;
    toURI(arg0: string, arg1: URI): URI;
}
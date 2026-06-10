import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFSYSTEMSocketAddress$SysAddr } from '../../../../org/newsclub/net/unix/AFSYSTEMSocketAddress$SysAddr.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class AFSYSTEMSocketAddress extends AFSocketAddress {
    static addressFamily(): AFAddressFamily<AFSYSTEMSocketAddress>;
    static canMap(paramarg0: SocketAddress): boolean;
    static canMap(paramarg0: SocketAddress, paramarg1: Class<AFSocketAddress>): boolean;
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    static isSupportedAddress(paramarg0: InetAddress): boolean;
    static isSupportedAddress(paramarg0: SocketAddress): boolean;
    static mapOrFail(paramarg0: SocketAddress, paramarg1: Class<AFSocketAddress>): AFSocketAddress | null;
    static mapOrFail(paramarg0: SocketAddress): AFSocketAddress;
    static of(paramarg0: URI): AFSYSTEMSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFSYSTEMSocketAddress;
    static of(paramarg0: URI): AFSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFSocketAddress;
    static ofSysAddrIdUnit(paramarg0: number, paramarg1: AFSYSTEMSocketAddress$SysAddr, paramarg2: number, paramarg3: number): AFSYSTEMSocketAddress;
    static ofSysAddrIdUnit(paramarg0: AFSYSTEMSocketAddress$SysAddr, paramarg1: number, paramarg2: number): AFSYSTEMSocketAddress;
    static unwrap(paramarg0: string, paramarg1: number): AFSYSTEMSocketAddress;
    static unwrap(paramarg0: InetAddress, paramarg1: number): AFSYSTEMSocketAddress;
    static unwrap(paramarg0: SocketAddress): AFSYSTEMSocketAddress;
    private constructor(arg0: number, arg1: number[], arg2: ObjectPool$Lease<ByteBuffer>)
    getFile(): File;
    getId(): number;
    getSysAddr(): AFSYSTEMSocketAddress$SysAddr;
    getUnit(): number;
    hasFilename(): boolean;
    toString(): string;
    toURI(arg0: string, arg1: URI): URI;
}
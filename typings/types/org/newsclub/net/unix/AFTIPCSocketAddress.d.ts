import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { AFAddressFamily } from '../../../../org/newsclub/net/unix/AFAddressFamily.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
import type { AFTIPCSocketAddress$Scope } from '../../../../org/newsclub/net/unix/AFTIPCSocketAddress$Scope.d.ts'
import type { ObjectPool$Lease } from '../../../../org/newsclub/net/unix/pool/ObjectPool$Lease.d.ts'
export class AFTIPCSocketAddress extends AFSocketAddress {
    static TIPC_RESERVED_TYPES: number;
    static TIPC_TOP_SRV: number;
    static addressFamily(): AFAddressFamily<AFTIPCSocketAddress>;
    static canMap(paramarg0: SocketAddress): boolean;
    static canMap(paramarg0: SocketAddress, paramarg1: Class<AFSocketAddress>): boolean;
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    static isSupportedAddress(paramarg0: InetAddress): boolean;
    static isSupportedAddress(paramarg0: SocketAddress): boolean;
    static mapOrFail(paramarg0: SocketAddress, paramarg1: Class<AFSocketAddress>): AFSocketAddress | null;
    static mapOrFail(paramarg0: SocketAddress): AFSocketAddress;
    static of(paramarg0: URI): AFSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFSocketAddress;
    static of(paramarg0: URI): AFTIPCSocketAddress;
    static of(paramarg0: URI, paramarg1: number): AFTIPCSocketAddress;
    static ofService(paramarg0: number, paramarg1: number): AFTIPCSocketAddress;
    static ofService(paramarg0: number, paramarg1: AFTIPCSocketAddress$Scope, paramarg2: number, paramarg3: number, paramarg4: number): AFTIPCSocketAddress;
    static ofService(paramarg0: AFTIPCSocketAddress$Scope, paramarg1: number, paramarg2: number): AFTIPCSocketAddress;
    static ofService(paramarg0: AFTIPCSocketAddress$Scope, paramarg1: number, paramarg2: number, paramarg3: number): AFTIPCSocketAddress;
    static ofServiceRange(paramarg0: number, paramarg1: number, paramarg2: number): AFTIPCSocketAddress;
    static ofServiceRange(paramarg0: number, paramarg1: AFTIPCSocketAddress$Scope, paramarg2: number, paramarg3: number, paramarg4: number): AFTIPCSocketAddress;
    static ofServiceRange(paramarg0: AFTIPCSocketAddress$Scope, paramarg1: number, paramarg2: number, paramarg3: number): AFTIPCSocketAddress;
    static ofSocket(paramarg0: number, paramarg1: number): AFTIPCSocketAddress;
    static ofSocket(paramarg0: number, paramarg1: number, paramarg2: number): AFTIPCSocketAddress;
    static ofTopologyService(): AFTIPCSocketAddress;
    static unwrap(paramarg0: string, paramarg1: number): AFTIPCSocketAddress;
    static unwrap(paramarg0: InetAddress, paramarg1: number): AFTIPCSocketAddress;
    static unwrap(paramarg0: SocketAddress): AFTIPCSocketAddress;
    private constructor(arg0: number, arg1: number[], arg2: ObjectPool$Lease<ByteBuffer>)
    getFile(): File;
    getScope(): AFTIPCSocketAddress$Scope;
    getTIPCDomain(): number;
    getTIPCInstance(): number;
    getTIPCLower(): number;
    getTIPCNodeHash(): number;
    getTIPCRef(): number;
    getTIPCType(): number;
    getTIPCUpper(): number;
    hasFilename(): boolean;
    toString(): string;
    // private toTipcInt(arg0: number): string;
    toURI(arg0: string, arg1: URI): URI;
}
import type { HostAndPort } from '../../../../../com/google/common/net/HostAndPort.d.ts'
import type { IServerAddress } from '../../../../../com/viaversion/viafabricplus/injection/access/core/bedrock/IServerAddress.d.ts'
import type { NetherNetAddress } from '../../../../../dev/kastle/netty/channel/nethernet/config/NetherNetAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ServerAddress extends Object implements IServerAddress {
    static isValidAddress(paraminput: string): boolean;
    static parsePort(paramstr: string): number;
    static parseString(paraminput: string): ServerAddress;
    private constructor(hostAndPort: HostAndPort)
    constructor(host: string, port: number)
    // private hostAndPort: HostAndPort;
    // private viaFabricPlus$netherNetAddress: NetherNetAddress;
    equals(o: Object | null): boolean;
    getHost(): string;
    getPort(): number;
    hashCode(): number;
    toString(): string;
    viaFabricPlus$getNetherNetAddress(): NetherNetAddress;
    viaFabricPlus$setNetherNetAddress(arg0: NetherNetAddress): void;
}
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { NetherNetAddress } from '../../../../../dev/kastle/netty/channel/nethernet/config/NetherNetAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConnectionUtil extends Object {
    static connect(paramarg0: string, paramarg1: ProtocolVersion): void;
    static connect(paramarg0: string, paramarg1: string): void;
    static connect(paramarg0: string, paramarg1: string, paramarg2: ProtocolVersion): void;
    static connectNetherNet(paramarg0: NetherNetAddress): void;
    constructor()
}
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
export class ProtocolVersionDetector extends Object {
    static get(paramarg0: ServerAddress, paramarg1: InetSocketAddress, paramarg2: ProtocolVersion): ProtocolVersion;
    constructor()
}
import type { UserConnection } from '../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ViaListener extends Object {
    constructor(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>)
    // private registered: boolean;
    // private requiredPipeline: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>;
    getUserConnection(arg0: UUID): UserConnection;
    isOnPipe(arg0: UserConnection): boolean;
    isOnPipe(arg0: UUID): boolean;
    isRegistered(): boolean;
    register(): void;
    setRegistered(arg0: boolean): void;
}
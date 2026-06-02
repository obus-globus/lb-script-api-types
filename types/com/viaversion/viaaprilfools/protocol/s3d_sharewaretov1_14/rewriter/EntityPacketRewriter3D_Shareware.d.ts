import type { Protocol3D_SharewareTo1_14 } from '../../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/Protocol3D_SharewareTo1_14.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { RewriterBase } from '../../../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
export class EntityPacketRewriter3D_Shareware extends RewriterBase<Protocol3D_SharewareTo1_14> {
    constructor(arg0: Protocol3D_SharewareTo1_14)
    handleEntityData(arg0: UserConnection, arg1: EntityData[]): void;
    registerPackets(): void;
}
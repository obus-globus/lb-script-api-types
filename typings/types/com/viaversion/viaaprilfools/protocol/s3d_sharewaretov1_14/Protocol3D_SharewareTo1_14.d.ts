import type { ClientboundPackets3D_Shareware } from '../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/packet/ClientboundPackets3D_Shareware.d.ts'
import type { ServerboundPackets3D_Shareware } from '../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/packet/ServerboundPackets3D_Shareware.d.ts'
import type { BlockItemPacketRewriter3D_Shareware } from '../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/rewriter/BlockItemPacketRewriter3D_Shareware.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
export class Protocol3D_SharewareTo1_14 extends BackwardsProtocol<ClientboundPackets3D_Shareware, ClientboundPackets1_14, ServerboundPackets3D_Shareware, ServerboundPackets1_14> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly itemRewriter: BlockItemPacketRewriter3D_Shareware;
    readonly particleRewriter: ParticleRewriter<ClientboundPackets3D_Shareware>;
    getItemRewriter(): BlockItemPacketRewriter3D_Shareware;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPackets3D_Shareware>;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}
import type { Protocol3D_SharewareTo1_14 } from '../../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/Protocol3D_SharewareTo1_14.d.ts'
import type { ClientboundPackets3D_Shareware } from '../../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/packet/ClientboundPackets3D_Shareware.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
import type { ItemRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ItemRewriter.d.ts'
export class BlockItemPacketRewriter3D_Shareware extends ItemRewriter<ClientboundPackets3D_Shareware, ServerboundPackets1_14, Protocol3D_SharewareTo1_14> {
    constructor(arg0: Protocol3D_SharewareTo1_14)
    registerPackets(): void;
}
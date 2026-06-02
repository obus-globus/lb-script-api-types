import type { ClientboundPackets3D_Shareware } from '../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/packet/ClientboundPackets3D_Shareware.d.ts'
import type { ServerboundPackets3D_Shareware } from '../../../../../com/viaversion/viaaprilfools/protocol/s3d_sharewaretov1_14/packet/ServerboundPackets3D_Shareware.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { ClientboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ClientboundPackets1_14.d.ts'
import type { ServerboundPackets1_14 } from '../../../../../com/viaversion/viaversion/protocols/v1_13_2to1_14/packet/ServerboundPackets1_14.d.ts'
export class Protocol1_14To3D_Shareware extends BackwardsProtocol<ClientboundPackets1_14, ClientboundPackets3D_Shareware, ServerboundPackets1_14, ServerboundPackets3D_Shareware> {
    constructor()
    registerPackets(): void;
}
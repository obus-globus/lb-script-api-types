import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BaseClientboundPacket extends ClientboundPacketType, Object{
    direction(): Direction;
}
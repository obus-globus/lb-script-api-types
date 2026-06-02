import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ServerboundPacket1_21_6 extends ServerboundPacketType, Object{
    direction(): Direction;
}
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ServerboundPacketType extends PacketType, Object{
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
}
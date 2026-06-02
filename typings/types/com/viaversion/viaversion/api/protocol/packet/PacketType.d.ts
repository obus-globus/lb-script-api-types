import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface PacketType extends Object{
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
}
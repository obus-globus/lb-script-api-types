import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SimpleProtocol$DummyPacketTypes extends Enum<SimpleProtocol$DummyPacketTypes> implements ClientboundPacketType, ServerboundPacketType {
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SimpleProtocol$DummyPacketTypes;
    static values(): SimpleProtocol$DummyPacketTypes[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
}
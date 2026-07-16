import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ServerboundPacket1_20_3 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ServerboundPacket1_20_3.d.ts'
import type { ServerboundPacket1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ServerboundPacket1_20_2.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundConfigurationPackets1_20_2 extends Enum<ServerboundConfigurationPackets1_20_2> implements ServerboundPacket1_20_3, ServerboundPacket1_20_2 {
    static CLIENT_INFORMATION: ServerboundConfigurationPackets1_20_2;
    static CUSTOM_PAYLOAD: ServerboundConfigurationPackets1_20_2;
    static FINISH_CONFIGURATION: ServerboundConfigurationPackets1_20_2;
    static KEEP_ALIVE: ServerboundConfigurationPackets1_20_2;
    static PONG: ServerboundConfigurationPackets1_20_2;
    static RESOURCE_PACK: ServerboundConfigurationPackets1_20_2;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundConfigurationPackets1_20_2;
    static values(): ServerboundConfigurationPackets1_20_2[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "CLIENT_INFORMATION" | "CUSTOM_PAYLOAD" | "FINISH_CONFIGURATION" | "KEEP_ALIVE" | "PONG" | "RESOURCE_PACK";
}
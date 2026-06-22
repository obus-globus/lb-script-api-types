import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ServerboundPacket26_1 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPacket26_1.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundConfigurationPackets1_21_9 extends Enum<ServerboundConfigurationPackets1_21_9> implements ServerboundPacket26_1, ServerboundPacket1_21_9 {
    static ACCEPT_CODE_OF_CONDUCT: ServerboundConfigurationPackets1_21_9;
    static CLIENT_INFORMATION: ServerboundConfigurationPackets1_21_9;
    static COOKIE_RESPONSE: ServerboundConfigurationPackets1_21_9;
    static CUSTOM_CLICK_ACTION: ServerboundConfigurationPackets1_21_9;
    static CUSTOM_PAYLOAD: ServerboundConfigurationPackets1_21_9;
    static FINISH_CONFIGURATION: ServerboundConfigurationPackets1_21_9;
    static KEEP_ALIVE: ServerboundConfigurationPackets1_21_9;
    static PONG: ServerboundConfigurationPackets1_21_9;
    static RESOURCE_PACK: ServerboundConfigurationPackets1_21_9;
    static SELECT_KNOWN_PACKS: ServerboundConfigurationPackets1_21_9;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundConfigurationPackets1_21_9;
    static values(): (Object | null)[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "CLIENT_INFORMATION" | "COOKIE_RESPONSE" | "CUSTOM_PAYLOAD" | "FINISH_CONFIGURATION" | "KEEP_ALIVE" | "PONG" | "RESOURCE_PACK" | "SELECT_KNOWN_PACKS" | "CUSTOM_CLICK_ACTION" | "ACCEPT_CODE_OF_CONDUCT";
}
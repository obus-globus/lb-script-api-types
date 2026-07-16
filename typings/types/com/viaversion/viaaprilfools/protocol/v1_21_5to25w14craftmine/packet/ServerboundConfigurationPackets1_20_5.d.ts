import type { ServerboundPacket25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ServerboundPacket25w14craftmine.d.ts'
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { ServerboundPacket1_21_4 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/packet/ServerboundPacket1_21_4.d.ts'
import type { ServerboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPacket1_21_5.d.ts'
import type { ServerboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ServerboundPacket1_21_2.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ServerboundConfigurationPackets1_20_5 extends Enum<ServerboundConfigurationPackets1_20_5> implements ServerboundPacket25w14craftmine, ServerboundPacket1_20_5, ServerboundPacket1_21_4, ServerboundPacket1_21_5, ServerboundPacket1_21_2 {
    static CLIENT_INFORMATION: ServerboundConfigurationPackets1_20_5;
    static COOKIE_RESPONSE: ServerboundConfigurationPackets1_20_5;
    static CUSTOM_PAYLOAD: ServerboundConfigurationPackets1_20_5;
    static FINISH_CONFIGURATION: ServerboundConfigurationPackets1_20_5;
    static KEEP_ALIVE: ServerboundConfigurationPackets1_20_5;
    static PONG: ServerboundConfigurationPackets1_20_5;
    static RESOURCE_PACK: ServerboundConfigurationPackets1_20_5;
    static SELECT_KNOWN_PACKS: ServerboundConfigurationPackets1_20_5;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ServerboundConfigurationPackets1_20_5;
    static values(): ServerboundConfigurationPackets1_20_5[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "CLIENT_INFORMATION" | "COOKIE_RESPONSE" | "CUSTOM_PAYLOAD" | "FINISH_CONFIGURATION" | "KEEP_ALIVE" | "PONG" | "RESOURCE_PACK" | "SELECT_KNOWN_PACKS";
}
import type { ClientboundPacket25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ClientboundPacket25w14craftmine.d.ts'
import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ClientboundConfigurationPackets1_21 extends Enum<ClientboundConfigurationPackets1_21> implements ClientboundPacket25w14craftmine, ClientboundPacket1_21, ClientboundPacket1_21_5, ClientboundPacket1_21_2 {
    static COOKIE_REQUEST: ClientboundConfigurationPackets1_21;
    static CUSTOM_PAYLOAD: ClientboundConfigurationPackets1_21;
    static CUSTOM_REPORT_DETAILS: ClientboundConfigurationPackets1_21;
    static DISCONNECT: ClientboundConfigurationPackets1_21;
    static FINISH_CONFIGURATION: ClientboundConfigurationPackets1_21;
    static KEEP_ALIVE: ClientboundConfigurationPackets1_21;
    static PING: ClientboundConfigurationPackets1_21;
    static REGISTRY_DATA: ClientboundConfigurationPackets1_21;
    static RESET_CHAT: ClientboundConfigurationPackets1_21;
    static RESOURCE_PACK_POP: ClientboundConfigurationPackets1_21;
    static RESOURCE_PACK_PUSH: ClientboundConfigurationPackets1_21;
    static SELECT_KNOWN_PACKS: ClientboundConfigurationPackets1_21;
    static SERVER_LINKS: ClientboundConfigurationPackets1_21;
    static STORE_COOKIE: ClientboundConfigurationPackets1_21;
    static TRANSFER: ClientboundConfigurationPackets1_21;
    static UPDATE_ENABLED_FEATURES: ClientboundConfigurationPackets1_21;
    static UPDATE_TAGS: ClientboundConfigurationPackets1_21;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundConfigurationPackets1_21;
    static values(): ClientboundConfigurationPackets1_21[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "COOKIE_REQUEST" | "CUSTOM_PAYLOAD" | "DISCONNECT" | "FINISH_CONFIGURATION" | "KEEP_ALIVE" | "PING" | "RESET_CHAT" | "REGISTRY_DATA" | "RESOURCE_PACK_POP" | "RESOURCE_PACK_PUSH" | "STORE_COOKIE" | "TRANSFER" | "UPDATE_ENABLED_FEATURES" | "UPDATE_TAGS" | "SELECT_KNOWN_PACKS" | "CUSTOM_REPORT_DETAILS" | "SERVER_LINKS";
}
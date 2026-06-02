import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ClientboundConfigurationPackets1_21_6 extends Enum<ClientboundConfigurationPackets1_21_6> implements ClientboundPacket1_21_6 {
    static CLEAR_DIALOG: ClientboundConfigurationPackets1_21_6;
    static COOKIE_REQUEST: ClientboundConfigurationPackets1_21_6;
    static CUSTOM_PAYLOAD: ClientboundConfigurationPackets1_21_6;
    static CUSTOM_REPORT_DETAILS: ClientboundConfigurationPackets1_21_6;
    static DISCONNECT: ClientboundConfigurationPackets1_21_6;
    static FINISH_CONFIGURATION: ClientboundConfigurationPackets1_21_6;
    static KEEP_ALIVE: ClientboundConfigurationPackets1_21_6;
    static PING: ClientboundConfigurationPackets1_21_6;
    static REGISTRY_DATA: ClientboundConfigurationPackets1_21_6;
    static RESET_CHAT: ClientboundConfigurationPackets1_21_6;
    static RESOURCE_PACK_POP: ClientboundConfigurationPackets1_21_6;
    static RESOURCE_PACK_PUSH: ClientboundConfigurationPackets1_21_6;
    static SELECT_KNOWN_PACKS: ClientboundConfigurationPackets1_21_6;
    static SERVER_LINKS: ClientboundConfigurationPackets1_21_6;
    static SHOW_DIALOG: ClientboundConfigurationPackets1_21_6;
    static STORE_COOKIE: ClientboundConfigurationPackets1_21_6;
    static TRANSFER: ClientboundConfigurationPackets1_21_6;
    static UPDATE_ENABLED_FEATURES: ClientboundConfigurationPackets1_21_6;
    static UPDATE_TAGS: ClientboundConfigurationPackets1_21_6;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundConfigurationPackets1_21_6;
    static values(): (Object | null)[];
    private constructor()
    getId(): number;
    getName(): string;
    state(): State;
    name(): "COOKIE_REQUEST" | "CUSTOM_PAYLOAD" | "DISCONNECT" | "FINISH_CONFIGURATION" | "KEEP_ALIVE" | "PING" | "RESET_CHAT" | "REGISTRY_DATA" | "RESOURCE_PACK_POP" | "RESOURCE_PACK_PUSH" | "STORE_COOKIE" | "TRANSFER" | "UPDATE_ENABLED_FEATURES" | "UPDATE_TAGS" | "SELECT_KNOWN_PACKS" | "CUSTOM_REPORT_DETAILS" | "SERVER_LINKS" | "CLEAR_DIALOG" | "SHOW_DIALOG";
}
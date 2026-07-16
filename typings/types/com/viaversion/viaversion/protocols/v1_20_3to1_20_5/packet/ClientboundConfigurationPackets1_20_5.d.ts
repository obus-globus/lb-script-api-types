import type { Direction } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ClientboundConfigurationPackets1_20_5 extends Enum<ClientboundConfigurationPackets1_20_5> implements ClientboundPacket1_20_5 {
    static COOKIE_REQUEST: ClientboundConfigurationPackets1_20_5;
    static CUSTOM_PAYLOAD: ClientboundConfigurationPackets1_20_5;
    static DISCONNECT: ClientboundConfigurationPackets1_20_5;
    static FINISH_CONFIGURATION: ClientboundConfigurationPackets1_20_5;
    static KEEP_ALIVE: ClientboundConfigurationPackets1_20_5;
    static PING: ClientboundConfigurationPackets1_20_5;
    static REGISTRY_DATA: ClientboundConfigurationPackets1_20_5;
    static RESET_CHAT: ClientboundConfigurationPackets1_20_5;
    static RESOURCE_PACK_POP: ClientboundConfigurationPackets1_20_5;
    static RESOURCE_PACK_PUSH: ClientboundConfigurationPackets1_20_5;
    static SELECT_KNOWN_PACKS: ClientboundConfigurationPackets1_20_5;
    static STORE_COOKIE: ClientboundConfigurationPackets1_20_5;
    static TRANSFER: ClientboundConfigurationPackets1_20_5;
    static UPDATE_ENABLED_FEATURES: ClientboundConfigurationPackets1_20_5;
    static UPDATE_TAGS: ClientboundConfigurationPackets1_20_5;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundConfigurationPackets1_20_5;
    static values(): ClientboundConfigurationPackets1_20_5[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "COOKIE_REQUEST" | "CUSTOM_PAYLOAD" | "DISCONNECT" | "FINISH_CONFIGURATION" | "KEEP_ALIVE" | "PING" | "RESET_CHAT" | "REGISTRY_DATA" | "RESOURCE_PACK_POP" | "RESOURCE_PACK_PUSH" | "STORE_COOKIE" | "TRANSFER" | "UPDATE_ENABLED_FEATURES" | "UPDATE_TAGS" | "SELECT_KNOWN_PACKS";
}
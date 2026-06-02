import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { ClientboundPacket1_20_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20to1_20_2/packet/ClientboundPacket1_20_2.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ClientboundConfigurationPackets1_20_2 extends Enum<ClientboundConfigurationPackets1_20_2> implements ClientboundPacket1_20_2 {
    static CUSTOM_PAYLOAD: ClientboundConfigurationPackets1_20_2;
    static DISCONNECT: ClientboundConfigurationPackets1_20_2;
    static FINISH_CONFIGURATION: ClientboundConfigurationPackets1_20_2;
    static KEEP_ALIVE: ClientboundConfigurationPackets1_20_2;
    static PING: ClientboundConfigurationPackets1_20_2;
    static REGISTRY_DATA: ClientboundConfigurationPackets1_20_2;
    static RESOURCE_PACK: ClientboundConfigurationPackets1_20_2;
    static UPDATE_ENABLED_FEATURES: ClientboundConfigurationPackets1_20_2;
    static UPDATE_TAGS: ClientboundConfigurationPackets1_20_2;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientboundConfigurationPackets1_20_2;
    static values(): (Object | null)[];
    private constructor()
    getId(): number;
    getName(): string;
    state(): State;
    name(): "CUSTOM_PAYLOAD" | "DISCONNECT" | "FINISH_CONFIGURATION" | "KEEP_ALIVE" | "PING" | "REGISTRY_DATA" | "RESOURCE_PACK" | "UPDATE_ENABLED_FEATURES" | "UPDATE_TAGS";
}
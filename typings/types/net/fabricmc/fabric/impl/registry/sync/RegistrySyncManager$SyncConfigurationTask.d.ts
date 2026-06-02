import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ConfigurationTask } from '../../../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export class RegistrySyncManager$SyncConfigurationTask extends Record implements ConfigurationTask {
    static KEY: ConfigurationTask$Type;
    constructor(handler: ServerConfigurationPacketListenerImpl, map: Map<Identifier, Object2IntMap<Identifier>>)
    // private handler: ServerConfigurationPacketListenerImpl;
    // private map: Map<Identifier, Object2IntMap<Identifier>>;
    equals(arg0: Object | null): boolean;
    handler(): ServerConfigurationPacketListenerImpl;
    hashCode(): number;
    map(): Map<Identifier, Object2IntMap<Identifier>>;
    start(arg0: (param0: Packet<Object>) => void): void;
    tick(): boolean;
    toString(): string;
    type(): ConfigurationTask$Type;
}
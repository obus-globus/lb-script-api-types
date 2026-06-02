import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LayeredRegistryAccess } from '../../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { RegistryLayer } from '../../../../../net/minecraft/server/RegistryLayer.d.ts'
import type { ConfigurationTask } from '../../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
import type { KnownPack } from '../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
export class SynchronizeRegistriesTask extends Object implements ConfigurationTask {
    static TYPE: ConfigurationTask$Type;
    constructor(knownPacks: KnownPack[], registries: LayeredRegistryAccess<RegistryLayer>)
    // private registries: LayeredRegistryAccess<RegistryLayer>;
    // private requestedPacks: KnownPack[];
    handleResponse(acceptedPacks: KnownPack[], connection: (param0: Packet<Object>) => void): void;
    // private sendRegistries(connection: (param0: Packet<Object>) => void, negotiatedPacks: KnownPack[]): void;
    start(connection: (param0: Packet<Object>) => void): void;
    tick(): boolean;
    type(): ConfigurationTask$Type;
}
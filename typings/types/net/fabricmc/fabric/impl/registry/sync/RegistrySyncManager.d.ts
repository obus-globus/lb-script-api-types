import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export class RegistrySyncManager extends Object {
    static DEBUG: boolean;
    static postBootstrap: boolean;
    static bootstrapRegistries(): void;
    static configureClient(paramarg0: ServerConfigurationPacketListenerImpl, paramarg1: MinecraftServer): void;
    static createAndPopulateRegistryMap(): JavaMap<Identifier, JavaMap<any, any>>;
    private constructor()
}
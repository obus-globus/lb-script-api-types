import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerLifecycleEvents$ServerStarted extends Object{
    onServerStarted(arg0: MinecraftServer): void;
}
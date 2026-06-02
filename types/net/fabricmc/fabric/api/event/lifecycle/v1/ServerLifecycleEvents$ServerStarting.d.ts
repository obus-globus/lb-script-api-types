import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerLifecycleEvents$ServerStarting extends Object{
    onServerStarting(arg0: MinecraftServer): void;
}
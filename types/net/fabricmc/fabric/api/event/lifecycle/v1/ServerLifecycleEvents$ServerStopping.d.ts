import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerLifecycleEvents$ServerStopping extends Object{
    onServerStopping(arg0: MinecraftServer): void;
}
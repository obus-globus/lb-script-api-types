import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export interface ServerLevelEvents$Unload extends Object{
    onLevelUnload(arg0: MinecraftServer, arg1: ServerLevel): void;
}
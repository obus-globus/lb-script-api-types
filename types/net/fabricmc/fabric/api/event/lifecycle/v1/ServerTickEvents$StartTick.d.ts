import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerTickEvents$StartTick extends Object{
    onStartTick(arg0: MinecraftServer): void;
}
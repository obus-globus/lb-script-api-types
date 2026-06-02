import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface ServerTickEvents$EndTick extends Object{
    onEndTick(arg0: MinecraftServer): void;
}
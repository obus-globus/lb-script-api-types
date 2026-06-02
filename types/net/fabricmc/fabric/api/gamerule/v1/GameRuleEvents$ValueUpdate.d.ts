import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
export interface GameRuleEvents$ValueUpdate<T extends Object | number | string | boolean> extends Object{
    onGameRuleUpdated(arg0: T, arg1: MinecraftServer): void;
}
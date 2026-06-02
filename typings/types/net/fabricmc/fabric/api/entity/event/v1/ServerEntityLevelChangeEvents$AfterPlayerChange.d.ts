import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerEntityLevelChangeEvents$AfterPlayerChange extends Object{
    afterChangeLevel(arg0: ServerPlayer, arg1: ServerLevel, arg2: ServerLevel): void;
}
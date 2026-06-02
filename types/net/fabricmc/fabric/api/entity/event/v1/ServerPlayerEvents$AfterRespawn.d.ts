import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerPlayerEvents$AfterRespawn extends Object{
    afterRespawn(arg0: ServerPlayer, arg1: ServerPlayer, arg2: boolean): void;
}
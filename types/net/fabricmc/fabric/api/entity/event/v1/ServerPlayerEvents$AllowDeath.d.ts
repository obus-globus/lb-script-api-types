import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
export interface ServerPlayerEvents$AllowDeath extends Object{
    allowDeath(arg0: ServerPlayer, arg1: DamageSource, arg2: number): boolean;
}
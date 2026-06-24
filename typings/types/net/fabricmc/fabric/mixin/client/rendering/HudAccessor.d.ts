import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export interface HudAccessor extends Object{
    fabric$callGetCameraPlayer(): Player;
    fabric$callGetHeartCount(arg0: LivingEntity): number;
    fabric$callGetHeartRows(arg0: number): number;
    fabric$callGetRiddenEntity(): LivingEntity;
    fabric$getRenderHealthValue(): number;
}
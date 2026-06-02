import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export interface MixinExperienceOrbAccessor extends Object{
    getFollowingPlayer(): Player;
}
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ActivityData } from '../../../../../../net/minecraft/world/entity/ai/ActivityData.d.ts'
import type { Brain } from '../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { AbstractPiglin } from '../../../../../../net/minecraft/world/entity/monster/piglin/AbstractPiglin.d.ts'
import type { Piglin } from '../../../../../../net/minecraft/world/entity/monster/piglin/Piglin.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
export class PiglinAi extends Object {
    static BARTERING_ITEM: Item;
    static MAX_TIME_BETWEEN_HUNTS: number;
    static REPELLENT_DETECTION_RANGE_HORIZONTAL: number;
    static REPELLENT_DETECTION_RANGE_VERTICAL: number;
    static angerNearbyPiglins(paramlevel: ServerLevel, paramplayer: Player, paramonlyIfTheySeeThePlayer: boolean): void;
    static findNearbyAdultPiglins(parambrain: Brain<Object>): AbstractPiglin[];
    static getActivities(parampiglin: Piglin): ActivityData<Piglin>[];
    static getAvoidTarget(parambody: Piglin): Optional<LivingEntity>;
    static getNearestVisibleTargetablePlayer(parambody: AbstractPiglin): Optional<Player>;
    static getSoundForCurrentActivity(parambody: Piglin): Optional<SoundEvent>;
    static isPlayerHoldingLovedItem(paramentity: LivingEntity): boolean;
    static isWearingSafeArmor(paramlivingEntity: LivingEntity): boolean;
    static isZombified(paramentity: Entity): boolean;
    static mobInteract(paramlevel: ServerLevel, parambody: Piglin, paramplayer: Player, paramhand: InteractionHand): InteractionResult;
    constructor()
}
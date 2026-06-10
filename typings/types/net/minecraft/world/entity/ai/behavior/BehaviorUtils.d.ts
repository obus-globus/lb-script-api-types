import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Brain } from '../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { PositionTracker } from '../../../../../../net/minecraft/world/entity/ai/behavior/PositionTracker.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BehaviorUtils extends Object {
    static canSee(parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static entityIsVisible(parambrain: Brain<Object>, paramtargetEntity: LivingEntity): boolean;
    static findSectionClosestToVillage(paramlevel: ServerLevel, paramcenter: SectionPos, paramradius: number): SectionPos;
    static getLivingEntityFromUUIDMemory(parambody: LivingEntity, parammemoryType: MemoryModuleType<UUID>): Optional<LivingEntity>;
    static getNearestTarget(parambody: LivingEntity, paramtarget1: Optional<LivingEntity>, paramtarget2: LivingEntity): LivingEntity;
    static getRandomSwimmablePos(parambody: PathfinderMob, parammaxHorizontalDistance: number, parammaxVerticalDistance: number): Vec3;
    static getTargetNearestMe(parambody: LivingEntity, paramtarget1: LivingEntity, paramtarget2: LivingEntity): LivingEntity;
    static isBreeding(parambody: LivingEntity): boolean;
    static isOtherTargetMuchFurtherAwayThanCurrentAttackTarget(parambody: LivingEntity, paramotherTarget: LivingEntity, paramhowMuchFurtherAway: number): boolean;
    static isWithinAttackRange(parambody: Mob, paramtarget: LivingEntity, paramprojectileAttackRangeMargin: number): boolean;
    static lockGazeAndWalkToEachOther(paramentity1: LivingEntity, paramentity2: LivingEntity, paramspeedModifier: number, paramcloseEnoughDistance: number): void;
    static lookAtEntity(paramlooker: LivingEntity, paramtargetEntity: LivingEntity): void;
    static setWalkAndLookTargetMemories(paramwalker: LivingEntity, paramtargetPos: BlockPos, paramspeedModifier: number, paramcloseEnoughDistance: number): void;
    static setWalkAndLookTargetMemories(paramwalker: LivingEntity, paramtargetEntity: Entity, paramspeedModifier: number, paramcloseEnoughDistance: number): void;
    static setWalkAndLookTargetMemories(paramwalker: LivingEntity, paramtarget: PositionTracker, paramspeedModifier: number, paramcloseEnoughDistance: number): void;
    static targetIsValid(parambrain: Brain<Object>, parammemory: MemoryModuleType<LivingEntity>, paramtargetType: EntityType<Object>): boolean;
    static throwItem(paramthrower: LivingEntity, paramitem: ItemStack, paramtargetPos: Vec3): void;
    static throwItem(paramthrower: LivingEntity, paramitem: ItemStack, paramtargetPos: Vec3, paramthrowVelocity: Vec3, paramhandYDistanceFromEye: number): void;
    private constructor()
}
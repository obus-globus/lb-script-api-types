import type { Either } from '../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Projectile } from '../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { AbstractArrow } from '../../../../../net/minecraft/world/entity/projectile/arrow/AbstractArrow.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AttackRange } from '../../../../../net/minecraft/world/item/component/AttackRange.d.ts'
import type { ClipContext$Block } from '../../../../../net/minecraft/world/level/ClipContext$Block.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
import type { HitResult } from '../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ProjectileUtil extends Object {
    static DEFAULT_ENTITY_HIT_RESULT_MARGIN: number;
    static computeMargin(paramsource: Entity): number;
    static getEntityHitResult(paramexcept: Entity, paramfrom: Vec3, paramto: Vec3, parambox: AABB, parammatching: (param0: Entity) => kotlin.Boolean, parammaxValue: number): EntityHitResult;
    static getEntityHitResult(paramlevel: Level, paramsource: Entity, paramfrom: Vec3, paramto: Vec3, paramtargetSearchArea: AABB, parammatching: (param0: Entity) => kotlin.Boolean, paramentityMargin: number): EntityHitResult;
    static getEntityHitResult(paramlevel: Level, paramsource: Projectile, paramfrom: Vec3, paramto: Vec3, paramtargetSearchArea: AABB, parammatching: (param0: Entity) => kotlin.Boolean): EntityHitResult;
    static getHitEntitiesAlong(paramattacker: Entity, paramattackRange: AttackRange, parammatching: (param0: Entity) => kotlin.Boolean, paramblockClipType: ClipContext$Block): Either<BlockHitResult, Object>;
    static getHitResultOnMoveVector(paramsource: Entity, parammatching: (param0: Entity) => kotlin.Boolean): HitResult;
    static getHitResultOnMoveVector(paramsource: Entity, parammatching: (param0: Entity) => kotlin.Boolean, paramclipType: ClipContext$Block): HitResult;
    static getHitResultOnViewVector(paramsource: Entity, parammatching: (param0: Entity) => kotlin.Boolean, paramdistance: number): HitResult;
    static getManyEntityHitResult(paramlevel: Level, paramsource: Entity, paramfrom: Vec3, paramto: Vec3, paramtargetSearchArea: AABB, parammatching: (param0: Entity) => kotlin.Boolean, paramincludeFromEntity: boolean): E[];
    static getManyEntityHitResult(paramlevel: Level, paramsource: Entity, paramfrom: Vec3, paramto: Vec3, paramtargetSearchArea: AABB, parammatching: (param0: Entity) => kotlin.Boolean, paramentityMargin: number, paramclipType: ClipContext$Block, paramincludeFromEntity: boolean): E[];
    static getMobArrow(parammob: LivingEntity, paramprojectile: ItemStack, parampower: number, paramfiredFromWeapon: ItemStack): AbstractArrow;
    static getWeaponHoldingHand(parammob: LivingEntity, paramweaponItem: Item): InteractionHand;
    static rotateTowardsMovement(paramprojectile: Entity, paramrotationSpeed: number): void;
    constructor()
}
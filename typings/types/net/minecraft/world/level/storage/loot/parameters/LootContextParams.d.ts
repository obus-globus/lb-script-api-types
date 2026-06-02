import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Unit } from '../../../../../../../net/minecraft/util/Unit.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemInstance } from '../../../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { BlockEntity } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LootContextParams extends Object {
    static ADDITIONAL_COST_COMPONENT_ALLOWED: ContextKey<Unit>;
    static ATTACKING_ENTITY: ContextKey<Entity>;
    static BLOCK_ENTITY: ContextKey<BlockEntity>;
    static BLOCK_STATE: ContextKey<BlockState>;
    static DAMAGE_SOURCE: ContextKey<DamageSource>;
    static DIRECT_ATTACKING_ENTITY: ContextKey<Entity>;
    static ENCHANTMENT_ACTIVE: ContextKey<boolean>;
    static ENCHANTMENT_LEVEL: ContextKey<number>;
    static EXPLOSION_RADIUS: ContextKey<number>;
    static INTERACTING_ENTITY: ContextKey<Entity>;
    static LAST_DAMAGE_PLAYER: ContextKey<Player>;
    static ORIGIN: ContextKey<Vec3>;
    static TARGET_ENTITY: ContextKey<Entity>;
    static THIS_ENTITY: ContextKey<Entity>;
    static TOOL: ContextKey<ItemInstance>;
    constructor()
}
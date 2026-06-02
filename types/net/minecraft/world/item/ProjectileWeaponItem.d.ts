import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Projectile } from '../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export abstract class ProjectileWeaponItem extends Item {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static ARROW_ONLY: (param0: ItemStack) => kotlin.Boolean;
    static ARROW_OR_FIREWORK: (param0: ItemStack) => kotlin.Boolean;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: Map<Block, Item>;
    static CODEC: Codec<Object>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Object>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static FILTERED_REGISTRIES: (Object | null)[];
    static MAX_BAR_WIDTH: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getHeldProjectile(paramentity: LivingEntity, paramvalid: (param0: ItemStack) => kotlin.Boolean): ItemStack;
    static getId(paramitem: Item): number;
    constructor(properties: Item$Properties)
    createProjectile(level: Level, shooter: LivingEntity, weapon: ItemStack, projectile: ItemStack, isCrit: boolean): Projectile;
    getAllSupportedProjectiles(): (param0: ItemStack) => kotlin.Boolean;
    getDefaultProjectileRange(): number;
    getDurabilityUse(projectile: ItemStack): number;
    getSupportedHeldProjectiles(): (param0: ItemStack) => kotlin.Boolean;
    shoot(level: ServerLevel, shooter: LivingEntity, hand: InteractionHand, weapon: ItemStack, projectiles: ItemStack[], power: number, uncertainty: number, isCrit: boolean, targetOverride: LivingEntity): void;
    shootProjectile(shooter: LivingEntity, projectileEntity: Projectile, index: number, power: number, uncertainty: number, angle: number, targetOverrride: LivingEntity): void;
}
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { UseOnContext } from '../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class SpawnEggItem extends Item {
    static ABSOLUTE_MAX_STACK_SIZE: number;
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
    static byId(paramtype: EntityType<Object>): Optional<Object>;
    static byId(paramid: number): Item;
    static getId(paramitem: Item): number;
    static getType(paramitemStack: ItemStack): EntityType<Object>;
    static spawnOffspringFromSpawnEgg(paramplayer: Player, paramparent: Mob, paramtype: EntityType<Object>, paramlevel: ServerLevel, parampos: Vec3, paramspawnEggStack: ItemStack): Optional<Mob>;
    static spawnsEntity(paramitemStack: ItemStack, paramtype: EntityType<Object>): boolean;
    constructor(properties: Item$Properties)
    shouldPrintOpWarning(stack: ItemStack, player: Player): boolean;
    use(level: Level, player: Player, hand: InteractionHand): InteractionResult;
    useOn(context: UseOnContext): InteractionResult;
}
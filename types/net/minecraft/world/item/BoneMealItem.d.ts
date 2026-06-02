import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { UseOnContext } from '../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelAccessor } from '../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class BoneMealItem extends Item {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: Map<Block, Item>;
    static CODEC: Codec<Object>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Object>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static FILTERED_REGISTRIES: (Object | null)[];
    static GRASS_COUNT_MULTIPLIER: number;
    static GRASS_SPREAD_HEIGHT: number;
    static GRASS_SPREAD_WIDTH: number;
    static MAX_BAR_WIDTH: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static addGrowthParticles(paramlevel: LevelAccessor, parampos: BlockPos, paramcount: number): void;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getId(paramitem: Item): number;
    static growCrop(paramitemStack: ItemStack, paramlevel: Level, parampos: BlockPos): boolean;
    static growWaterPlant(paramitemStack: ItemStack, paramlevel: Level, parampos: BlockPos, paramclickedFace: Direction): boolean;
    constructor(properties: Item$Properties)
    useOn(context: UseOnContext): InteractionResult;
}
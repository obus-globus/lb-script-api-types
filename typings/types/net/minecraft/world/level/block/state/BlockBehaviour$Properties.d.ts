import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricBlock$FabricProperties } from '../../../../../../net/fabricmc/fabric/api/block/v1/FabricBlock$FabricProperties.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DependantName } from '../../../../../../net/minecraft/resources/DependantName.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { FeatureFlag } from '../../../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { SoundType } from '../../../../../../net/minecraft/world/level/block/SoundType.d.ts'
import type { BlockBehaviour } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour.d.ts'
import type { BlockBehaviour$OffsetFunction } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$OffsetFunction.d.ts'
import type { BlockBehaviour$OffsetType } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$OffsetType.d.ts'
import type { BlockBehaviour$PostProcess } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$PostProcess.d.ts'
import type { BlockBehaviour$StateArgumentPredicate } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$StateArgumentPredicate.d.ts'
import type { BlockBehaviour$StatePredicate } from '../../../../../../net/minecraft/world/level/block/state/BlockBehaviour$StatePredicate.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { NoteBlockInstrument } from '../../../../../../net/minecraft/world/level/block/state/properties/NoteBlockInstrument.d.ts'
import type { MapColor } from '../../../../../../net/minecraft/world/level/material/MapColor.d.ts'
import type { PushReaction } from '../../../../../../net/minecraft/world/level/material/PushReaction.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockBehaviour$Properties extends Object implements FabricBlock$FabricProperties {
    static CODEC: Codec<BlockBehaviour$Properties>;
    static of(): BlockBehaviour$Properties;
    static ofFullCopy(paramblock: BlockBehaviour): BlockBehaviour$Properties;
    static ofLegacyCopy(paramblock: BlockBehaviour): BlockBehaviour$Properties;
    constructor()
    // private canOcclude: boolean;
    // private descriptionId: (param0: ResourceKey<Block>) => string;
    // private destroyTime: number;
    // private drops: (param0: ResourceKey<Block>) => Optional<ResourceKey<LootTable>>;
    // private dynamicShape: boolean;
    // private emissiveRendering: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private explosionResistance: number;
    // private forceSolidOff: boolean;
    // private forceSolidOn: boolean;
    // private friction: number;
    // private hasCollision: boolean;
    // private id: ResourceKey<Block>;
    // private ignitedByLava: boolean;
    // private instrument: NoteBlockInstrument;
    // private isAir: boolean;
    // private isRandomlyTicking: boolean;
    // private isRedstoneConductor: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private isSuffocating: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private isValidSpawn: (param0: BlockState, param1: BlockGetter, param2: BlockPos, param3: EntityType<any>) => boolean;
    // private isViewBlocking: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean;
    // private jumpFactor: number;
    // private lightEmission: (param0: BlockState) => number;
    // private liquid: boolean;
    // private mapColor: (param0: BlockState) => MapColor;
    // private offsetFunction: (param0: BlockState, param1: BlockPos) => Vec3;
    // private postProcess: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => BlockPos;
    // private pushReaction: PushReaction;
    // private replaceable: boolean;
    // private requiredFeatures: FeatureFlagSet;
    // private requiresCorrectToolForDrops: boolean;
    // private soundType: SoundType;
    // private spawnTerrainParticles: boolean;
    // private speedFactor: number;
    air(): BlockBehaviour$Properties;
    blockId(): ResourceKey<Block>;
    blockId(): ResourceKey<Object>;
    blockIdOrThrow(): ResourceKey<Block>;
    destroyTime(destroyTime: number): BlockBehaviour$Properties;
    dynamicShape(): BlockBehaviour$Properties;
    effectiveDescriptionId(): string;
    effectiveDrops(): Optional<ResourceKey<LootTable>>;
    emissiveRendering(emissiveRendering: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean): BlockBehaviour$Properties;
    explosionResistance(explosionResistance: number): BlockBehaviour$Properties;
    forceSolidOff(): BlockBehaviour$Properties;
    forceSolidOn(): BlockBehaviour$Properties;
    friction(friction: number): BlockBehaviour$Properties;
    ignitedByLava(): BlockBehaviour$Properties;
    instabreak(): BlockBehaviour$Properties;
    instrument(instrument: NoteBlockInstrument): BlockBehaviour$Properties;
    isRedstoneConductor(isRedstoneConductor: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean): BlockBehaviour$Properties;
    isSuffocating(isSuffocating: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean): BlockBehaviour$Properties;
    isValidSpawn(isValidSpawn: (param0: BlockState, param1: BlockGetter, param2: BlockPos, param3: EntityType<any>) => boolean): BlockBehaviour$Properties;
    isViewBlocking(isViewBlocking: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => boolean): BlockBehaviour$Properties;
    jumpFactor(jumpFactor: number): BlockBehaviour$Properties;
    lightLevel(lightEmission: (param0: BlockState) => number): BlockBehaviour$Properties;
    liquid(): BlockBehaviour$Properties;
    mapColor(mapColor: (param0: BlockState) => MapColor): BlockBehaviour$Properties;
    mapColor(dyeColor: DyeColor): BlockBehaviour$Properties;
    mapColor(mapColor: MapColor): BlockBehaviour$Properties;
    noCollision(): BlockBehaviour$Properties;
    noLootTable(): BlockBehaviour$Properties;
    noOcclusion(): BlockBehaviour$Properties;
    noTerrainParticles(): BlockBehaviour$Properties;
    offsetType(offsetType: BlockBehaviour$OffsetType): BlockBehaviour$Properties;
    overrideDescription(descriptionId: string): BlockBehaviour$Properties;
    overrideLootTable(table: Optional<ResourceKey<LootTable>>): BlockBehaviour$Properties;
    postProcess(postProcess: (param0: BlockState, param1: BlockGetter, param2: BlockPos) => BlockPos): BlockBehaviour$Properties;
    pushReaction(pushReaction: PushReaction): BlockBehaviour$Properties;
    randomTicks(): BlockBehaviour$Properties;
    replaceable(): BlockBehaviour$Properties;
    requiredFeatures(flags: FeatureFlag[]): BlockBehaviour$Properties;
    requiresCorrectToolForDrops(): BlockBehaviour$Properties;
    setId(id: ResourceKey<Block>): BlockBehaviour$Properties;
    sound(soundType: SoundType): BlockBehaviour$Properties;
    speedFactor(speedFactor: number): BlockBehaviour$Properties;
    strength(destroyTime: number): BlockBehaviour$Properties;
    strength(destroyTime: number, explosionResistance: number): BlockBehaviour$Properties;
}
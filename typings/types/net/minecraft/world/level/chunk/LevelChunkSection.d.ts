import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockCountingSection } from '../../../../../net/caffeinemc/mods/lithium/common/block/BlockCountingSection.d.ts'
import type { BlockListeningSection } from '../../../../../net/caffeinemc/mods/lithium/common/block/BlockListeningSection.d.ts'
import type { TrackedBlockStatePredicate } from '../../../../../net/caffeinemc/mods/lithium/common/block/TrackedBlockStatePredicate.d.ts'
import type { SectionedBlockChangeTracker } from '../../../../../net/caffeinemc/mods/lithium/common/tracking/block/SectionedBlockChangeTracker.d.ts'
import type { LithiumSectionData } from '../../../../../net/caffeinemc/mods/lithium/common/world/section/LithiumSectionData.d.ts'
import type { LithiumSectionData$SectionData } from '../../../../../net/caffeinemc/mods/lithium/common/world/section/LithiumSectionData$SectionData.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeResolver } from '../../../../../net/minecraft/world/level/biome/BiomeResolver.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PalettedContainer } from '../../../../../net/minecraft/world/level/chunk/PalettedContainer.d.ts'
import type { PalettedContainerFactory } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerFactory.d.ts'
import type { PalettedContainerRO } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerRO.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class LevelChunkSection extends Object implements BlockCountingSection, BlockListeningSection, LithiumSectionData {
    static BIOME_CONTAINER_BITS: number;
    static SECTION_HEIGHT: number;
    static SECTION_SIZE: number;
    static SECTION_WIDTH: number;
    private constructor(source: LevelChunkSection)
    constructor(states: PalettedContainer<BlockState>, biomes: PalettedContainerRO<Holder<Biome>>)
    constructor(containerFactory: PalettedContainerFactory)
    readonly biomes: PalettedContainerRO<Holder<Biome>>;
    // private fluidCount: number;
    // private nonEmptyBlockCount: number;
    // private sectionData: LithiumSectionData$SectionData;
    readonly states: PalettedContainer<BlockState>;
    // private tickingBlockCount: number;
    // private tickingFluidCount: number;
    acquire(): void;
    copy(): LevelChunkSection;
    // private fastInitClientCounts(): void;
    fillBiomesFromNoise(biomeResolver: BiomeResolver, sampler: Climate$Sampler, quartMinX: number, quartMinY: number, quartMinZ: number): void;
    getBiomes(): PalettedContainerRO<Holder<Biome>>;
    getBlockState(sectionX: number, sectionY: number, sectionZ: number): BlockState;
    getFluidState(sectionX: number, sectionY: number, sectionZ: number): FluidState;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getSerializedSize(): number;
    getStates(): PalettedContainer<BlockState>;
    hasFluid(): boolean;
    hasOnlyAir(): boolean;
    isRandomlyTicking(): boolean;
    isRandomlyTickingBlocks(): boolean;
    isRandomlyTickingFluids(): boolean;
    lithium$addToCallback(arg0: SectionedBlockChangeTracker, arg1: number, arg2: Level): void;
    lithium$getCount(arg0: TrackedBlockStatePredicate): number;
    lithium$getCount(arg0: number): number;
    lithium$getSectionData(): LithiumSectionData$SectionData;
    lithium$getSectionDataDirect(): LithiumSectionData$SectionData;
    lithium$mayContainAny(arg0: TrackedBlockStatePredicate): boolean;
    lithium$removeFromCallback(arg0: SectionedBlockChangeTracker): void;
    lithium$trackBlockStateChange(arg0: BlockState, arg1: BlockState): void;
    maybeHas(predicate: (param0: BlockState) => boolean): boolean;
    read(buffer: FriendlyByteBuf): void;
    readBiomes(buffer: FriendlyByteBuf): void;
    recalcBlockCounts(): void;
    release(): void;
    setBlockState(sectionX: number, sectionY: number, sectionZ: number, state: BlockState): BlockState;
    setBlockState(sectionX: number, sectionY: number, sectionZ: number, state: BlockState, checkThreading: boolean): BlockState;
    write(buffer: FriendlyByteBuf): void;
}
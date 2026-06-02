import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PalettedContainer } from '../../../../../net/minecraft/world/level/chunk/PalettedContainer.d.ts'
import type { PalettedContainerRO } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerRO.d.ts'
import type { Strategy } from '../../../../../net/minecraft/world/level/chunk/Strategy.d.ts'
export class PalettedContainerFactory extends Record {
    static create(paramregistries: RegistryAccess): PalettedContainerFactory;
    constructor(blockStatesStrategy: Strategy<BlockState>, defaultBlockState: BlockState, blockStatesContainerCodec: Codec<PalettedContainer<BlockState>>, biomeStrategy: Strategy<Holder<Biome>>, defaultBiome: Holder<Biome>, biomeContainerCodec: Codec<PalettedContainerRO<Holder<Biome>>>)
    // private biomeContainerCodec: Codec<PalettedContainerRO<Holder<Biome>>>;
    // private biomeStrategy: Strategy<Holder<Biome>>;
    // private blockStatesContainerCodec: Codec<PalettedContainer<BlockState>>;
    // private blockStatesStrategy: Strategy<BlockState>;
    // private defaultBiome: Holder<Biome>;
    // private defaultBlockState: BlockState;
    biomeContainerCodec(): Codec<PalettedContainerRO<Holder<Biome>>>;
    biomeStrategy(): Strategy<Holder<Biome>>;
    blockStatesContainerCodec(): Codec<PalettedContainer<BlockState>>;
    blockStatesStrategy(): Strategy<BlockState>;
    createForBiomes(): PalettedContainer<Holder<Biome>>;
    createForBlockStates(): PalettedContainer<BlockState>;
    defaultBiome(): Holder<Biome>;
    defaultBlockState(): BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
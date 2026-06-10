import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { StructureManager } from '../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { Beardifier$Rigid } from '../../../../../net/minecraft/world/level/levelgen/Beardifier$Rigid.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunctions$BeardifierOrMarker } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$BeardifierOrMarker.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { JigsawJunction } from '../../../../../net/minecraft/world/level/levelgen/structure/pools/JigsawJunction.d.ts'
export class Beardifier extends Object implements DensityFunctions$BeardifierOrMarker {
    static BEARD_KERNEL_RADIUS: number;
    static CODEC: Codec<Holder<DensityFunction>>;
    static CODEC: KeyDispatchDataCodec<DensityFunction>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static EMPTY: Beardifier;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    static forStructuresInChunk(paramstructureManager: StructureManager, paramchunkPos: ChunkPos): Beardifier;
    constructor(pieces: Beardifier$Rigid[], junctions: JigsawJunction[], affectedBox: BoundingBox)
    // private affectedBox: BoundingBox;
    // private junctions: JigsawJunction[];
    // private pieces: Beardifier$Rigid[];
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    maxValue(): number;
    minValue(): number;
}
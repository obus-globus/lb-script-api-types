import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { CardinalLighting } from '../../../../../net/minecraft/world/level/CardinalLighting.d.ts'
import type { ColorResolver } from '../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class MovingBlockRenderState extends Object implements FabricRenderState, BlockAndTintGetter {
    static EMPTY: BlockAndTintGetter;
    constructor()
    biome: Holder<Biome>;
    blockPos: BlockPos;
    blockState: BlockState;
    cardinalLighting: CardinalLighting;
    lightEngine: LevelLightEngine;
    randomSeedPos: BlockPos;
    // private renderStateData: Map<Object | null, Object | null>;
    cardinalLighting(): CardinalLighting;
    clearExtraData(): void;
    clearExtraData(): void;
    getBiomeFabric(arg0: BlockPos): Holder<Object>;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockState(pos: BlockPos): BlockState;
    getBlockTint(pos: BlockPos, color: (param0: Biome, param1: number, param2: number) => kotlin.Int): number;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    getFluidState(pos: BlockPos): FluidState;
    getHeight(): number;
    getLightEngine(): LevelLightEngine;
    getMinY(): number;
    hasBiomes(): boolean;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
}
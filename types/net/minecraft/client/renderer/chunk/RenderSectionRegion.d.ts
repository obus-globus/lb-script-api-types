import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RenderDataMapConsumer } from '../../../../../net/fabricmc/fabric/impl/blockgetter/client/RenderDataMapConsumer.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { SectionCopy } from '../../../../../net/minecraft/client/renderer/chunk/SectionCopy.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { CardinalLighting } from '../../../../../net/minecraft/world/level/CardinalLighting.d.ts'
import type { ColorResolver } from '../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class RenderSectionRegion extends Object implements RenderDataMapConsumer, BlockAndTintGetter {
    static EMPTY: BlockAndTintGetter;
    static RADIUS: number;
    static SIZE: number;
    static index(paramminSectionX: number, paramminSectionY: number, paramminSectionZ: number, paramsectionX: number, paramsectionY: number, paramsectionZ: number): number;
    constructor(level: ClientLevel, minSectionX: number, minSectionY: number, minSectionZ: number, sections: SectionCopy[])
    // private cardinalLighting: CardinalLighting;
    // private fabric_renderDataMap: Long2ObjectMap<Object>;
    // private level: ClientLevel;
    readonly lightEngine: LevelLightEngine;
    // private minSectionX: number;
    readonly minSectionY: number;
    // private minSectionZ: number;
    // private sections: SectionCopy[];
    cardinalLighting(): CardinalLighting;
    fabric_acceptRenderDataMap(arg0: Long2ObjectMap<Object>): void;
    getBiomeFabric(arg0: BlockPos): Holder<Object>;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntityRenderData(arg0: BlockPos): Object;
    getBlockState(pos: BlockPos): BlockState;
    getBlockTint(pos: BlockPos, resolver: (param0: Biome, param1: number, param2: number) => kotlin.Int): number;
    getFluidState(pos: BlockPos): FluidState;
    getHeight(): number;
    getLightEngine(): LevelLightEngine;
    getMinY(): number;
    // private getSection(sectionX: number, sectionY: number, sectionZ: number): SectionCopy;
    hasBiomes(): boolean;
}
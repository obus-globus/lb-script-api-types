import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class EndSpikeFeature$EndSpike extends Object {
    static CODEC: Codec<EndSpikeFeature$EndSpike>;
    constructor(centerX: number, centerZ: number, radius: number, height: number, guarded: boolean)
    readonly centerX: number;
    readonly centerZ: number;
    readonly guarded: boolean;
    readonly height: number;
    readonly radius: number;
    readonly topBoundingBox: AABB;
    getCenterX(): number;
    getCenterZ(): number;
    getHeight(): number;
    getRadius(): number;
    getTopBoundingBox(): AABB;
    isCenterWithinChunk(chunkOrigin: BlockPos): boolean;
    isGuarded(): boolean;
}
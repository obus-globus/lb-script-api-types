import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export interface Hole extends Object, Comparable<Hole>{
    readonly bedrockOnly: boolean;
    readonly pos: BlockPos;
    readonly positions: BoundingBox;
    readonly size: number;
    asList(): BlockPos[];
    compareTo(other: Hole): number;
    contains(pos: Vec3i): boolean;
    isInvalidatedByFilling(pos: Vec3i): boolean;
}
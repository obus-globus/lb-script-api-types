import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Hole$Type } from '../../../../../../net/ccbluex/liquidbounce/utils/block/hole/Hole$Type.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class Hole extends Record implements Comparable<Hole> {
    constructor(type: Hole$Type, positions: BoundingBox, bedrockOnly: boolean, blockInvalidators: BoundingBox)
    // private bedrockOnly: boolean;
    /*not mapped: */ bedrockOnly(): boolean;
    // private blockInvalidators: BoundingBox;
    /*not mapped: */ blockInvalidators(): BoundingBox;
    // private positions: BoundingBox;
    /*not mapped: */ positions(): BoundingBox;
    // private type: Hole$Type;
    /*not mapped: */ type(): Hole$Type;
    compareTo(other: Hole): number;
    component1(): Hole$Type;
    component2(): BoundingBox;
    component3(): boolean;
    component4(): BoundingBox;
    contains(pos: Vec3i): boolean;
    copy(type: Hole$Type, positions: BoundingBox, bedrockOnly: boolean, blockInvalidators: BoundingBox): Hole;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
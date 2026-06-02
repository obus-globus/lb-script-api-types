import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class SurroundingBlock extends Record implements Comparable<SurroundingBlock> {
    constructor(block: Block, count: number, layer: number)
    // private block: Block;
    /*not mapped: */ block(): Block;
    // private count: number;
    /*not mapped: */ count(): number;
    // private layer: number;
    /*not mapped: */ layer(): number;
    compareTo(other: SurroundingBlock): number;
    component1(): Block;
    component2(): number;
    component3(): number;
    copy(block: Block, count: number, layer: number): SurroundingBlock;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
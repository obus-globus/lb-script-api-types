import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class DirectMappedExplosionBlockCache extends Record {
    constructor(arg0: number)
    constructor(directMappedTags: number[], directMappedStates: BlockState[], directMappedResistances: number[])
    // private directMappedResistances: number[];
    // private directMappedStates: BlockState[];
    // private directMappedTags: number[];
    directMappedResistances(): number[];
    directMappedStates(): BlockState[];
    directMappedTags(): number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
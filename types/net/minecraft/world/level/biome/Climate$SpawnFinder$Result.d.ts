import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class Climate$SpawnFinder$Result extends Record {
    // private fitness: number;
    // private location: BlockPos;
    equals(o: Object | null): boolean;
    fitness(): number;
    hashCode(): number;
    location(): BlockPos;
    toString(): string;
}
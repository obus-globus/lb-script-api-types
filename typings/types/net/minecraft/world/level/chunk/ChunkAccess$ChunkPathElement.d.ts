import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkAccess$ChunkPathElement extends Record implements ProblemReporter$PathElement {
    private constructor(pos: ChunkPos)
    // private pos: ChunkPos;
    equals(o: Object | null): boolean;
    get(): string;
    hashCode(): number;
    pos(): ChunkPos;
    toString(): string;
}
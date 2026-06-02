import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class BlockEntity$BlockEntityPathElement extends Record implements ProblemReporter$PathElement {
    private constructor(blockEntity: BlockEntity)
    // private blockEntity: BlockEntity;
    blockEntity(): BlockEntity;
    equals(o: Object | null): boolean;
    get(): string;
    hashCode(): number;
    toString(): string;
}
import type { Either } from '../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { StructurePiecesBuilder } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePiecesBuilder.d.ts'
export class Structure$GenerationStub extends Record {
    constructor(position: BlockPos, generator: Either<(param0: StructurePiecesBuilder) => void, StructurePiecesBuilder>)
    constructor(position: BlockPos, generator: (param0: StructurePiecesBuilder) => void)
    // private generator: Either<(param0: StructurePiecesBuilder) => void, StructurePiecesBuilder>;
    // private position: BlockPos;
    equals(o: Object | null): boolean;
    generator(): Either<(param0: StructurePiecesBuilder) => void, StructurePiecesBuilder>;
    getPiecesBuilder(): StructurePiecesBuilder;
    hashCode(): number;
    position(): BlockPos;
    toString(): string;
}
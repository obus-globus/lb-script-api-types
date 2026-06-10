import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkPyramid } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkPyramid.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStep } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
import type { ChunkStep$Builder } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStep$Builder.d.ts'
export class ChunkPyramid$Builder extends Object {
    constructor()
    // private steps: ChunkStep[];
    build(): ChunkPyramid;
    step(status: ChunkStatus, operator: (param0: ChunkStep$Builder) => Object | null): ChunkPyramid$Builder;
}
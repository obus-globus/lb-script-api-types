import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class CauldronStorage {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static get(paramarg0: Level, paramarg1: BlockPos): (Object | null)[];
}
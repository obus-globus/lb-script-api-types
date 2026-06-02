import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProgramId } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramId.d.ts'
import type { ProgramSet } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSet.d.ts'
import type { ProgramSource } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
export class ProgramFallbackResolver extends Object {
    constructor(arg0: ProgramSet)
    // private cache: { [key in ProgramId]: ProgramSource };
    // private programs: ProgramSet;
    has(arg0: ProgramId): boolean;
    resolve(arg0: ProgramId): Optional<ProgramSource>;
    resolveNullable(arg0: ProgramId): ProgramSource;
}
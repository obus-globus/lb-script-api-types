import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PipesResult$STATUS } from '../../../../org/apache/tika/pipes/PipesResult$STATUS.d.ts'
export abstract class PipesReporterBase$StatusFilter extends Object {
    private constructor()
    accept(arg0: PipesResult$STATUS): boolean;
}
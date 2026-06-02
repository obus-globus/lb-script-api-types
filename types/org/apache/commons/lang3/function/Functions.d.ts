import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Functions extends Object {
    static apply(paramarg0: (param0: Object | null) => Object | null, paramarg1: Object | null): Object | null;
    static applyNonNull(paramarg0: Object | null, paramarg1: (param0: Object | null) => Object | null): Object | null;
    static applyNonNull(paramarg0: Object | null, paramarg1: (param0: Object | null) => Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static applyNonNull(paramarg0: Object | null, paramarg1: (param0: Object | null) => Object | null, paramarg2: (param0: Object | null) => Object | null, paramarg3: (param0: Object | null) => Object | null): Object | null;
    static function(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    private constructor()
}
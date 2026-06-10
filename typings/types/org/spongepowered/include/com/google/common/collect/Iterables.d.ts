import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
export class Iterables extends Object {
    static concat(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): (Object | null)[];
    static getFirst(paramarg0: (Object | null)[], paramarg1: Object | null): Object | null;
    static toString(paramarg0: Object[]): string;
    static transform(paramarg0: (Object | null)[], paramarg1: (param0: Object) => boolean): (Object | null)[];
}
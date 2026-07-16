import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
export class Lists extends Object {
    static newArrayList<E extends unknown>(): E[];
    static transform<F extends unknown, T extends unknown>(paramarg0: F[], paramarg1: (param0: Object) => T): T[];
}
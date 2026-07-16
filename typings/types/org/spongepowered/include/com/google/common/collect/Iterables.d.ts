import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function } from '../../../../../../../org/spongepowered/include/com/google/common/base/Function.d.ts'
export class Iterables extends Object {
    static concat<T extends unknown>(paramarg0: T[], paramarg1: T[]): T[];
    static getFirst<T extends unknown>(paramarg0: T[], paramarg1: T): T;
    static toString(paramarg0: Object[]): string;
    static transform<F extends unknown, T extends unknown>(paramarg0: F[], paramarg1: (param0: Object) => T): T[];
}
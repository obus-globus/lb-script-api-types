import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Enums extends Object {
    static addEnumInstance<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: T): void;
    static clearEnumCache(paramarg0: Class<Object>): void;
    static newInstance<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string, paramarg2: number, paramarg3: Class<Object>[], paramarg4: Object[]): T;
    static valueOfIgnoreCase(paramarg0: Class<Object>, paramarg1: string): Object;
    constructor()
}
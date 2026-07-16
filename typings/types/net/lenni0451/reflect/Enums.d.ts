import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Enums extends Object {
    static addEnumInstance(paramarg0: Class<Object>, paramarg1: Object | null): void;
    static clearEnumCache(paramarg0: Class<Object>): void;
    static newInstance(paramarg0: Class<Object>, paramarg1: string, paramarg2: number, paramarg3: Class<Object>[], paramarg4: Object[]): Object | null;
    static valueOfIgnoreCase(paramarg0: Class<Object>, paramarg1: string): Object;
    constructor()
}
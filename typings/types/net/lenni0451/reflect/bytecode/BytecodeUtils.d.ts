import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BytecodeUtils extends Object {
    static boxed(paramarg0: Class<Object>): Class<Object>;
    static desc(paramarg0: Class<Object>): string;
    static desc(paramarg0: string): string;
    static desc(paramarg0: Method): string;
    static dot(paramarg0: string): string;
    static getLoadOpcode(paramarg0: Class<Object>): string;
    static getReturnOpcode(paramarg0: Class<Object>): string;
    static getStackSize(paramarg0: Class<Object>): number;
    static mdesc(paramarg0: Class<Object>, ...paramarg1: Object | null): string;
    static slash(paramarg0: Class<Object>): string;
    static slash(paramarg0: string): string;
    static unboxed(paramarg0: Class<Object>): Class<Object>;
    constructor()
}
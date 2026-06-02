import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class Util extends Object {
    static getCallingClass(): Class<Object>;
    static report(paramarg0: string): void;
    static report(paramarg0: string, paramarg1: Throwable): void;
    static safeGetBooleanSystemProperty(paramarg0: string): boolean;
    static safeGetSystemProperty(paramarg0: string): string;
    private constructor()
}
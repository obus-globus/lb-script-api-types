import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Classes extends Object {
    static byName(paramarg0: string): Class<Object>;
    static byName(paramarg0: string, paramarg1: boolean): Class<Object>;
    static byName(paramarg0: string, paramarg1: boolean, paramarg2: ClassLoader): Class<Object>;
    static byName(paramarg0: string, paramarg1: ClassLoader): Class<Object>;
    static ensureInitialized(paramarg0: Class<Object>): void;
    static find(paramarg0: string, paramarg1: boolean, ...paramarg2: ClassLoader[]): Class<Object>;
    static find(paramarg0: string, paramarg1: boolean, paramarg2: ClassLoader[]): Class<Object>;
    static forName(paramarg0: string): Class<Object>;
    static forName(paramarg0: string, paramarg1: boolean): Class<Object>;
    static forName(paramarg0: string, paramarg1: boolean, paramarg2: ClassLoader): Class<Object>;
    static forName(paramarg0: string, paramarg1: ClassLoader): Class<Object>;
    static getCallerClass(paramarg0: number): Class<Object>;
    static getDeclaredClass(paramarg0: Class<Object>, paramarg1: string): Class<Object>;
    static getDeclaredClasses(paramarg0: Class<Object>): Class<Object>[];
    constructor()
}
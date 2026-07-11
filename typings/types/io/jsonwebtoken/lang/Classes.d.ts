import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Classes extends Object {
    static forName(paramarg0: string): Class<Object>;
    static getConstructor(paramarg0: Class<Object>, ...paramarg1: Object | null): Constructor<Object>;
    static getFieldValue(paramarg0: Object, paramarg1: string, paramarg2: Class<Object>): Object | null;
    static getResourceAsStream(paramarg0: string): InputStream;
    static instantiate(paramarg0: Constructor<Object>, ...paramarg1: (Object | null)[]): Object | null;
    static invokeStatic(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null, ...paramarg3: (Object | null)[]): Object | null;
    static invokeStatic(paramarg0: string, paramarg1: string, paramarg2: Object | null, ...paramarg3: (Object | null)[]): Object | null;
    static isAvailable(paramarg0: string): boolean;
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, ...paramarg1: (Object | null)[]): Object | null;
    static newInstance(paramarg0: string): Object | null;
    static newInstance(paramarg0: string, paramarg1: Object | null, ...paramarg2: (Object | null)[]): Object | null;
    static newInstance(paramarg0: string, ...paramarg1: (Object | null)[]): Object | null;
    private constructor()
}
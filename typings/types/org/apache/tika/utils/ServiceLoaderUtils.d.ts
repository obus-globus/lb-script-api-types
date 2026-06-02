import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
export class ServiceLoaderUtils extends Object {
    static newInstance(paramarg0: Class<Object>, paramarg1: ServiceLoader): Object | null;
    static newInstance(paramarg0: string): Object | null;
    static newInstance(paramarg0: string, paramarg1: ClassLoader): Object | null;
    static sortLoadedClasses(paramarg0: (Object | null)[]): void;
    constructor()
}
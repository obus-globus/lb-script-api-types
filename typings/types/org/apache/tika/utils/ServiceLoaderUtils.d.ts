import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServiceLoader } from '../../../../org/apache/tika/config/ServiceLoader.d.ts'
export class ServiceLoaderUtils extends Object {
    static newInstance<T extends unknown>(paramarg0: Class<Object>, paramarg1: ServiceLoader): T;
    static newInstance<T extends unknown>(paramarg0: string): T;
    static newInstance<T extends unknown>(paramarg0: string, paramarg1: ClassLoader): T;
    static sortLoadedClasses<T extends unknown>(paramarg0: T[]): void;
    constructor()
}
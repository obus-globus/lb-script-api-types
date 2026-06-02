import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAdapterClassLoader extends Object {
    constructor(className: string, classBytes: number[])
    // private classBytes: number[];
    // private className: string;
    // private createClassLoader(cache: HostClassCache, parentLoader: ClassLoader, classOverrides: Object): ClassLoader;
    generateClass(cache: HostClassCache, parentLoader: ClassLoader, classOverrides: Object): Class<Object>;
}
import type { GeneratorClassLoaders$FactoryClassLoader } from '../../../../../com/oracle/truffle/api/staticobject/GeneratorClassLoaders$FactoryClassLoader.d.ts'
import type { GeneratorClassLoaders$StorageClassLoader } from '../../../../../com/oracle/truffle/api/staticobject/GeneratorClassLoaders$StorageClassLoader.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GeneratorClassLoaders extends Object {
    constructor(referenceClass: Class<Object>)
    // private factoryCL: GeneratorClassLoaders$FactoryClassLoader;
    // private storageCL: GeneratorClassLoaders$StorageClassLoader;
    defineGeneratedClass(name: string, b: number[], off: number, len: number, isStorage: boolean): Class<Object>;
}
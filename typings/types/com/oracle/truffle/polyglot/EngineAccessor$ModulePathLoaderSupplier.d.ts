import type { EngineAccessor$StrongClassLoaderSupplier } from '../../../../com/oracle/truffle/polyglot/EngineAccessor$StrongClassLoaderSupplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EngineAccessor$ModulePathLoaderSupplier extends EngineAccessor$StrongClassLoaderSupplier {
    constructor(classLoader: ClassLoader)
    accepts(clazz: Class<Object>): boolean;
}
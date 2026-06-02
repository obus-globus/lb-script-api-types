import type { EngineAccessor$WeakClassLoaderSupplier } from '../../../../com/oracle/truffle/polyglot/EngineAccessor$WeakClassLoaderSupplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EngineAccessor$WeakModulePathLoaderSupplier extends EngineAccessor$WeakClassLoaderSupplier {
    constructor(loader: ClassLoader)
    accepts(clazz: Class<Object>): boolean;
}
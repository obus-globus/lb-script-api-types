import type { EngineAccessor$AbstractClassLoaderSupplier } from '../../../../com/oracle/truffle/polyglot/EngineAccessor$AbstractClassLoaderSupplier.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
export class EngineAccessor$WeakClassLoaderSupplier extends EngineAccessor$AbstractClassLoaderSupplier {
    constructor(classLoader: ClassLoader)
    // private classLoaderRef: Reference<ClassLoader>;
    get(): ClassLoader;
}
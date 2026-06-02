import type { EngineAccessor$AbstractClassLoaderSupplier } from '../../../../com/oracle/truffle/polyglot/EngineAccessor$AbstractClassLoaderSupplier.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
export class EngineAccessor$StrongClassLoaderSupplier extends EngineAccessor$AbstractClassLoaderSupplier {
    constructor(classLoader: ClassLoader)
    // private classLoader: ClassLoader;
    get(): ClassLoader;
}
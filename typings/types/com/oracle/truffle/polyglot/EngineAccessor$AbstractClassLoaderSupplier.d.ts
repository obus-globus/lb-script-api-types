import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class EngineAccessor$AbstractClassLoaderSupplier extends Object implements Supplier<ClassLoader> {
    constructor(loader: ClassLoader)
    // private hashCode: number;
    accepts(clazz: Class<Object>): boolean;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { JavaClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class LazyJavaPackageScope$FindClassRequest extends Object {
    constructor(arg0: Name, arg1: JavaClass)
    readonly javaClass: JavaClass;
    readonly name: Name;
    equals(arg0: Object | null): boolean;
    getJavaClass(): JavaClass;
    getName(): Name;
    hashCode(): number;
}
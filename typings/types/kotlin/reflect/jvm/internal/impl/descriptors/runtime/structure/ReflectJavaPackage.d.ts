import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ReflectJavaElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/runtime/structure/ReflectJavaElement.d.ts'
import type { JavaAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaPackage } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaPackage.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class ReflectJavaPackage extends ReflectJavaElement implements JavaPackage {
    constructor(arg0: FqName)
    readonly fqName: FqName;
    equals(arg0: Object | null): boolean;
    findAnnotation(arg0: FqName): JavaAnnotation;
    getAnnotations(): JavaAnnotation[];
    getClasses(arg0: (param0: Name) => boolean): JavaClass[];
    getFqName(): FqName;
    getSubPackages(): JavaPackage[];
    hashCode(): number;
    isDeprecatedInJavaDoc(): boolean;
    toString(): string;
}
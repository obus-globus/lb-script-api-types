import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaAnnotationOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationOwner.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface JavaPackage extends Object, JavaAnnotationOwner{
    getClasses(arg0: (param0: Name) => boolean): E[];
    getFqName(): FqName;
    getSubPackages(): E[];
}
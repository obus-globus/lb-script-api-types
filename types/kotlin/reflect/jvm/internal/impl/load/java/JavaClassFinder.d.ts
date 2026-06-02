import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JavaClassFinder$Request } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaClassFinder$Request.d.ts'
import type { JavaClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaPackage } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaPackage.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface JavaClassFinder extends Object{
    findClass(arg0: JavaClassFinder$Request): JavaClass;
    findPackage(arg0: FqName, arg1: boolean): JavaPackage;
    knownClassNamesInPackage(arg0: FqName): string[];
}
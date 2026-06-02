import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class NameResolverUtilKt extends Object {
    static getClassId(paramarg0: NameResolver, paramarg1: number): ClassId;
    static getName(paramarg0: NameResolver, paramarg1: number): Name;
}
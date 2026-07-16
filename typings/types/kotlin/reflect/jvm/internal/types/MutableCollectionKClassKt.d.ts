import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { FqName } from '../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { MutableCollectionKClass } from '../../../../../kotlin/reflect/jvm/internal/types/MutableCollectionKClass.d.ts'
export class MutableCollectionKClassKt extends Object {
    static getMutableCollectionKClass(mutableFqName: FqName, readonlyKClass: KClass<Object>): MutableCollectionKClass<Object>;
}
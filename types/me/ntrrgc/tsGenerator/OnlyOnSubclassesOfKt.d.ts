import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { ClassTransformer } from '../../../me/ntrrgc/tsGenerator/ClassTransformer.d.ts'
import type { FilteredClassTransformer } from '../../../me/ntrrgc/tsGenerator/FilteredClassTransformer.d.ts'
export class OnlyOnSubclassesOfKt extends Object {
    static onlyOnSubclassesOf(paramarg0: ClassTransformer, paramarg1: KClass<Object>): FilteredClassTransformer;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../kotlin/reflect/KTypeProjection.d.ts'
export class KClassifiers extends Object {
    static checkArgumentsSize(paramarg0: number, paramarg1: number): void;
    static createType(paramarg0: KClassifier, paramarg1: KTypeProjection[], paramarg2: boolean, paramarg3: (Object | null)[]): KType;
    static createTypeImpl(paramarg0: KClassifier, paramarg1: KTypeProjection[], paramarg2: boolean, paramarg3: (Object | null)[], paramarg4: KClass<Object>): KType;
    static getStarProjectedType(paramarg0: KClassifier): KType;
}
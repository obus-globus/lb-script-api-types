import type { Object } from '../../java/lang/Object.d.ts'
import type { KClassifier } from '../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KVariance } from '../../kotlin/reflect/KVariance.d.ts'
export interface KTypeParameter extends Object, KClassifier{
    /*not mapped: */ isReified(): boolean;
    readonly name: string;
    readonly upperBounds: KType[];
    readonly variance: KVariance;
}
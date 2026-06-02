import type { Object } from '../../java/lang/Object.d.ts'
import type { KAnnotatedElement } from '../../kotlin/reflect/KAnnotatedElement.d.ts'
import type { KClassifier } from '../../kotlin/reflect/KClassifier.d.ts'
import type { KTypeProjection } from '../../kotlin/reflect/KTypeProjection.d.ts'
export interface KType extends Object, KAnnotatedElement{
    readonly arguments: KTypeProjection[];
    readonly classifier: KClassifier | null;
    /*not mapped: */ isMarkedNullable(): boolean;
}
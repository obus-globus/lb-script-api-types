import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../kotlin/reflect/KTypeProjection.d.ts'
export class KClassifiers extends Object {
    static checkArgumentsSize(parametersSize: number, argumentsSize: number): void;
    static createType(self: KClassifier, arguments: KTypeProjection[], nullable: boolean, annotations: Annotation[]): KType;
    static createTypeImpl(self: KClassifier, arguments: KTypeProjection[], nullable: boolean, annotations: Annotation[], mutableCollectionClass: KClass<Object> | null): KType;
    static getStarProjectedType(paramarg0: KClassifier): KType;
}
import type { IntUnaryOperator } from '../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface RawStructure extends Annotation, Object {
    constructor(sizeProvider: KClass<(param0: number) => kotlin.Int>)
    /*not mapped: */ sizeProvider(): KClass<(param0: number) => kotlin.Int>;
}
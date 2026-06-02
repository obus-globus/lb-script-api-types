import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { WordBase } from '../../../../../org/graalvm/word/WordBase.d.ts'
export interface RawPointerTo extends Annotation, Object{
    constructor(value: KClass<WordBase>)
    /*not mapped: */ value(): KClass<WordBase>;
}
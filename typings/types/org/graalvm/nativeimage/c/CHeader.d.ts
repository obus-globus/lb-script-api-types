import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { CHeader$Header } from '../../../../org/graalvm/nativeimage/c/CHeader$Header.d.ts'
export interface CHeader extends Annotation, Object{
    constructor(value: KClass<CHeader$Header>)
    /*not mapped: */ value(): KClass<CHeader$Header>;
}
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Until extends Annotation, Object{
    constructor(value: number)
    /*not mapped: */ value(): number;
}
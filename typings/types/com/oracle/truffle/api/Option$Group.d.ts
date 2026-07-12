import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Option$Group extends Annotation, Object{
    constructor(...value: string[])
    /*not mapped: */ value(): string[];
}
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Tag$Identifier extends Annotation, Object{
    constructor(value: string)
    /*not mapped: */ value(): string;
}
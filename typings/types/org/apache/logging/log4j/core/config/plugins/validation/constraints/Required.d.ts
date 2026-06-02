import type { Annotation } from '../../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface Required extends Annotation, Object{
    constructor(message: string)
    /*not mapped: */ message(): string;
}
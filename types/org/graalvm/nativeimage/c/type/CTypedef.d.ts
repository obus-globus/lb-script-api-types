import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CTypedef extends Annotation, Object{
    constructor(name: string)
    /*not mapped: */ name(): string;
}
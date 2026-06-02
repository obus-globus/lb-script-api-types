import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface ContextFunctionTypeParams extends Annotation, Object{
    constructor(count: number)
    /*not mapped: */ count(): number;
}
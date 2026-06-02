import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Executed extends Annotation, Object{
    constructor(with_: string[])
    /*not mapped: */ with(): string[];
}
import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface QueryName extends Annotation, Object{
    constructor(encoded: boolean)
    /*not mapped: */ encoded(): boolean;
}
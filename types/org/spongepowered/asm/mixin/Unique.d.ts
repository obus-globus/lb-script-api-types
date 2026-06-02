import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Unique extends Annotation, Object{
    constructor(silent: boolean)
    /*not mapped: */ silent(): boolean;
}
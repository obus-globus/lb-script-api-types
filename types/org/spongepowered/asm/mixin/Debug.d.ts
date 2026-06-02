import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Debug extends Annotation, Object{
    constructor(export_: boolean, print: boolean)
    /*not mapped: */ export(): boolean;
    /*not mapped: */ print(): boolean;
}
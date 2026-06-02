import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Invoker extends Annotation, Object{
    constructor(remap: boolean, value: string)
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ value(): string;
}
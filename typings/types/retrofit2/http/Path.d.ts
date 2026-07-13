import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Path extends Annotation, Object{
    constructor(encoded: boolean, value: string)
    /*not mapped: */ encoded(): boolean;
    /*not mapped: */ value(): string;
}
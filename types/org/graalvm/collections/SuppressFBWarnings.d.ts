import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SuppressFBWarnings extends Annotation, Object{
    constructor(justification: string, value: string[])
    /*not mapped: */ justification(): string;
    /*not mapped: */ value(): string[];
}
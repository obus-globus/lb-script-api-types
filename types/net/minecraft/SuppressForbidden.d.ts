import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface SuppressForbidden extends Annotation, Object{
    constructor(reason: string)
    /*not mapped: */ reason(): string;
}
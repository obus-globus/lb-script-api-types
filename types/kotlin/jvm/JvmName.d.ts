import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JvmName extends Annotation, Object{
    constructor(name: string)
    /*not mapped: */ name(): string;
}
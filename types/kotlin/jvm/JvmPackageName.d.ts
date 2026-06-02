import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JvmPackageName extends Annotation, Object{
    constructor(name: string)
    /*not mapped: */ name(): string;
}
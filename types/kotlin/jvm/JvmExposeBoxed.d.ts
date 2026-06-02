import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JvmExposeBoxed extends Annotation, Object{
    constructor(jvmName: string)
    /*not mapped: */ jvmName(): string;
}
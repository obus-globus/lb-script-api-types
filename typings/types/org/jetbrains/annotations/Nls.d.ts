import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Nls$Capitalization } from '../../../org/jetbrains/annotations/Nls$Capitalization.d.ts'
export interface Nls extends Annotation, Object{
    constructor(capitalization: Nls$Capitalization)
    /*not mapped: */ capitalization(): Nls$Capitalization;
}
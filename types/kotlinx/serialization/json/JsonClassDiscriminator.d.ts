import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface JsonClassDiscriminator extends Annotation, Object{
    constructor(discriminator: string)
    /*not mapped: */ discriminator(): string;
}
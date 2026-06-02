import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Desc } from '../../../../../org/spongepowered/asm/mixin/injection/Desc.d.ts'
export interface Descriptors extends Annotation, Object{
    constructor(value: Desc[])
    /*not mapped: */ value(): Desc[];
}
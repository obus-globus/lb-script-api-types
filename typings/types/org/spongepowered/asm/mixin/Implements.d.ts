import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Interface } from '../../../../org/spongepowered/asm/mixin/Interface.d.ts'
export interface Implements extends Annotation, Object{
    /*not mapped: */ value(): Interface[];
}
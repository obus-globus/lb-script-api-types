import type { Definition } from '../../../../com/llamalad7/mixinextras/expression/Definition.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Definitions extends Annotation, Object{
    constructor(value: Definition[])
    /*not mapped: */ value(): Definition[];
}
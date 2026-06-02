import type { Expression } from '../../../../com/llamalad7/mixinextras/expression/Expression.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Expressions extends Annotation, Object{
    constructor(value: Expression[])
    /*not mapped: */ value(): Expression[];
}
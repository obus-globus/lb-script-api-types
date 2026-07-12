import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BindExternalFunction } from '../../../../../team/unnamed/mocha/runtime/binding/BindExternalFunction.d.ts'
export interface BindExternalFunction$Multiple extends Annotation, Object{
    constructor(...value: BindExternalFunction[])
    /*not mapped: */ value(): BindExternalFunction[];
}
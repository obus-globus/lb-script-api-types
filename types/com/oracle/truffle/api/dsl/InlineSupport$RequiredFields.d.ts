import type { InlineSupport$RequiredField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$RequiredField.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InlineSupport$RequiredFields extends Annotation, Object{
    constructor(value: InlineSupport$RequiredField[])
    /*not mapped: */ value(): InlineSupport$RequiredField[];
}
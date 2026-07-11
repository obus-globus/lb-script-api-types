import type { NodeField } from '../../../../../com/oracle/truffle/api/dsl/NodeField.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface NodeFields extends Annotation, Object{
    constructor(...value: NodeField[])
    /*not mapped: */ value(): NodeField[];
}
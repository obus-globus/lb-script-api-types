import type { NodeChild } from '../../../../../com/oracle/truffle/api/dsl/NodeChild.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface NodeChildren extends Annotation, Object{
    /*not mapped: */ value(): NodeChild[];
}
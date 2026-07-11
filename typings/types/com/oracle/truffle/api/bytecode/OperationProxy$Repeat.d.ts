import type { OperationProxy } from '../../../../../com/oracle/truffle/api/bytecode/OperationProxy.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface OperationProxy$Repeat extends Annotation, Object{
    constructor(...value: OperationProxy[])
    /*not mapped: */ value(): OperationProxy[];
}
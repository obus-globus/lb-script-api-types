import type { ShortCircuitOperation } from '../../../../../com/oracle/truffle/api/bytecode/ShortCircuitOperation.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortCircuitOperation$Repeat extends Annotation, Object{
    constructor(...value: ShortCircuitOperation[])
    /*not mapped: */ value(): ShortCircuitOperation[];
}
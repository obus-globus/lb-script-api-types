import type { ConstantOperand } from '../../../../../com/oracle/truffle/api/bytecode/ConstantOperand.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ConstantOperand$Repeat extends Annotation, Object{
    /*not mapped: */ value(): ConstantOperand[];
}
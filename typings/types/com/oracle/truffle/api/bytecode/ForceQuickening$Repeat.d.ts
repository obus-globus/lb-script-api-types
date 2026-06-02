import type { ForceQuickening } from '../../../../../com/oracle/truffle/api/bytecode/ForceQuickening.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ForceQuickening$Repeat extends Annotation, Object{
    constructor(value: ForceQuickening[])
    /*not mapped: */ value(): ForceQuickening[];
}
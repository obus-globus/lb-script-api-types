import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Word$Opcode } from '../../../../org/graalvm/word/impl/Word$Opcode.d.ts'
export interface Word$Operation extends Annotation, Object{
    /*not mapped: */ opcode(): Word$Opcode;
}
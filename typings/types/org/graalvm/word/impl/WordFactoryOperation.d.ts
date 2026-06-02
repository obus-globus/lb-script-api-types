import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { WordFactoryOpcode } from '../../../../org/graalvm/word/impl/WordFactoryOpcode.d.ts'
export interface WordFactoryOperation extends Annotation, Object{
    constructor(opcode: WordFactoryOpcode)
    /*not mapped: */ opcode(): WordFactoryOpcode;
}
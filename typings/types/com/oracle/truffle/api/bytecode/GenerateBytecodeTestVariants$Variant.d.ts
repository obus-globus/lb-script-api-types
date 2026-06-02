import type { GenerateBytecode } from '../../../../../com/oracle/truffle/api/bytecode/GenerateBytecode.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface GenerateBytecodeTestVariants$Variant extends Annotation, Object{
    constructor(configuration: GenerateBytecode, suffix: string)
    /*not mapped: */ configuration(): GenerateBytecode;
    /*not mapped: */ suffix(): string;
}
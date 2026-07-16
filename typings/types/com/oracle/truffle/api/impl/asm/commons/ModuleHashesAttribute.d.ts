import type { Attribute } from '../../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ByteVector } from '../../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassWriter.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
export class ModuleHashesAttribute extends Attribute {
    static read(paramattribute: Attribute, paramclassReader: ClassReader, paramoffset: number, paramlength: number, paramcharBuffer: string[], paramcodeAttributeOffset: number, paramlabels: Label[]): Attribute;
    static readLabel(paramclassReader: ClassReader, parambytecodeOffset: number, paramlabels: Label[]): Label;
    static write(paramattribute: Attribute, paramclassWriter: ClassWriter, paramcode: number[], paramcodeLength: number, parammaxStack: number, parammaxLocals: number): number[];
    constructor()
    constructor(algorithm: string, modules: string[], hashes: number[][])
    algorithm: string;
    hashes: number[][];
    modules: string[];
    read(classReader: ClassReader, offset: number, length: number, charBuffer: string[], codeAttributeOffset: number, labels: Label[]): Attribute;
    write(classWriter: ClassWriter, code: number[], codeLength: number, maxStack: number, maxLocals: number): ByteVector;
}
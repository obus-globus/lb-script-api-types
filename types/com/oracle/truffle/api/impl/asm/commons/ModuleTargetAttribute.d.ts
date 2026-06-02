import type { Attribute } from '../../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ByteVector } from '../../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassWriter.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModuleTargetAttribute extends Attribute {
    static read(paramattribute: Attribute, paramclassReader: ClassReader, paramoffset: number, paramlength: number, paramcharBuffer: string[], paramcodeAttributeOffset: number, paramlabels: (Object | null)[]): Attribute;
    static readLabel(paramclassReader: ClassReader, parambytecodeOffset: number, paramlabels: (Object | null)[]): Label;
    static write(paramattribute: Attribute, paramclassWriter: ClassWriter, paramcode: number[], paramcodeLength: number, parammaxStack: number, parammaxLocals: number): number[];
    constructor()
    constructor(platform: string)
    platform: string;
    read(classReader: ClassReader, offset: number, length: number, charBuffer: string[], codeOffset: number, labels: Label[]): Attribute;
    write(classWriter: ClassWriter, code: number[], codeLength: number, maxStack: number, maxLocals: number): ByteVector;
}
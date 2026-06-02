import type { Attribute } from '../../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ByteVector } from '../../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassWriter.d.ts'
import type { Label } from '../../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ModuleResolutionAttribute extends Attribute {
    static RESOLUTION_DO_NOT_RESOLVE_BY_DEFAULT: number;
    static RESOLUTION_WARN_DEPRECATED: number;
    static RESOLUTION_WARN_DEPRECATED_FOR_REMOVAL: number;
    static RESOLUTION_WARN_INCUBATING: number;
    static read(paramattribute: Attribute, paramclassReader: ClassReader, paramoffset: number, paramlength: number, paramcharBuffer: string[], paramcodeAttributeOffset: number, paramlabels: (Object | null)[]): Attribute;
    static readLabel(paramclassReader: ClassReader, parambytecodeOffset: number, paramlabels: (Object | null)[]): Label;
    static write(paramattribute: Attribute, paramclassWriter: ClassWriter, paramcode: number[], paramcodeLength: number, parammaxStack: number, parammaxLocals: number): number[];
    constructor()
    constructor(resolution: number)
    resolution: number;
    read(classReader: ClassReader, offset: number, length: number, charBuffer: string[], codeOffset: number, labels: Label[]): Attribute;
    write(classWriter: ClassWriter, code: number[], codeLength: number, maxStack: number, maxLocals: number): ByteVector;
}
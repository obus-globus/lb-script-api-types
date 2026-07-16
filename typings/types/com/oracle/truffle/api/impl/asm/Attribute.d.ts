import type { ByteVector } from '../../../../../../com/oracle/truffle/api/impl/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../../../com/oracle/truffle/api/impl/asm/ClassWriter.d.ts'
import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Attribute extends Object {
    static read(paramattribute: Attribute, paramclassReader: ClassReader, paramoffset: number, paramlength: number, paramcharBuffer: string[], paramcodeAttributeOffset: number, paramlabels: Label[]): Attribute;
    static readLabel(paramclassReader: ClassReader, parambytecodeOffset: number, paramlabels: Label[]): Label;
    static write(paramattribute: Attribute, paramclassWriter: ClassWriter, paramcode: number[], paramcodeLength: number, parammaxStack: number, parammaxLocals: number): number[];
    constructor(type: string)
    // private cachedContent: ByteVector;
    // private nextAttribute: Attribute;
    type: string;
    computeAttributesSize(symbolTable: SymbolTable): number;
    computeAttributesSize(symbolTable: SymbolTable, code: number[], codeLength: number, maxStack: number, maxLocals: number): number;
    getAttributeCount(): number;
    getLabels(): Label[];
    isCodeAttribute(): boolean;
    isUnknown(): boolean;
    // private maybeWrite(classWriter: ClassWriter, code: number[], codeLength: number, maxStack: number, maxLocals: number): ByteVector;
    putAttributes(symbolTable: SymbolTable, output: ByteVector): void;
    putAttributes(symbolTable: SymbolTable, code: number[], codeLength: number, maxStack: number, maxLocals: number, output: ByteVector): void;
    read(classReader: ClassReader, offset: number, length: number, charBuffer: string[], codeAttributeOffset: number, labels: Label[]): Attribute;
    write(classWriter: ClassWriter, code: number[], codeLength: number, maxStack: number, maxLocals: number): ByteVector;
}
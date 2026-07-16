import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteVector } from '../../../org/objectweb/asm/ByteVector.d.ts'
import type { ClassReader } from '../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../org/objectweb/asm/ClassWriter.d.ts'
import type { Label } from '../../../org/objectweb/asm/Label.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
export class Attribute extends Object {
    static read(paramarg0: Attribute, paramarg1: ClassReader, paramarg2: number, paramarg3: number, paramarg4: string[], paramarg5: number, paramarg6: Label[]): Attribute;
    static readLabel(paramarg0: ClassReader, paramarg1: number, paramarg2: Label[]): Label;
    static write(paramarg0: Attribute, paramarg1: ClassWriter, paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: number): number[];
    constructor(arg0: string)
    // private cachedContent: ByteVector;
    // private nextAttribute: Attribute;
    type: string;
    computeAttributesSize(arg0: SymbolTable): number;
    computeAttributesSize(arg0: SymbolTable, arg1: number[], arg2: number, arg3: number, arg4: number): number;
    getAttributeCount(): number;
    getLabels(): Label[];
    isCodeAttribute(): boolean;
    isUnknown(): boolean;
    // private maybeWrite(arg0: ClassWriter, arg1: number[], arg2: number, arg3: number, arg4: number): ByteVector;
    putAttributes(arg0: SymbolTable, arg1: number[], arg2: number, arg3: number, arg4: number, arg5: ByteVector): void;
    putAttributes(arg0: SymbolTable, arg1: ByteVector): void;
    read(arg0: ClassReader, arg1: number, arg2: number, arg3: string[], arg4: number, arg5: Label[]): Attribute;
    write(arg0: ClassWriter, arg1: number[], arg2: number, arg3: number, arg4: number): ByteVector;
}
import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Segment } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { BCIRenumberedAttribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/BCIRenumberedAttribute.d.ts'
import type { ByteCode } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
import type { ExceptionTableEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ExceptionTableEntry.d.ts'
import type { OperandManager } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
export class CodeAttribute extends BCIRenumberedAttribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor(arg0: number, arg1: number, arg2: number[], arg3: Segment, arg4: OperandManager, arg5: ExceptionTableEntry[])
    attributes: Attribute[];
    byteCodeOffsets: number[];
    byteCodes: ByteCode[];
    codeLength: number;
    exceptionTable: ExceptionTableEntry[];
    maxLocals: number;
    maxStack: number;
    addAttribute(arg0: Attribute): void;
    getLength(): number;
    getNestedClassFileEntries(): ClassFileEntry[];
    getStartPCs(): number[];
    renumber(arg0: number[]): void;
    resolve(arg0: ClassConstantPool): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}
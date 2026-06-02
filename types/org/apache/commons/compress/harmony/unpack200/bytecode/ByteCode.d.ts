import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Segment } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
import type { ClassConstantPool } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassConstantPool.d.ts'
import type { ClassFileEntry } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
import type { CodeAttribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CodeAttribute.d.ts'
import type { OperandManager } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
import type { ByteCodeForm } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/forms/ByteCodeForm.d.ts'
export class ByteCode extends ClassFileEntry {
    static getByteCode(paramarg0: number): ByteCode;
    constructor(arg0: number)
    constructor(arg0: number, arg1: ClassFileEntry[])
    // private byteCodeForm: ByteCodeForm;
    // private byteCodeOffset: number;
    readonly byteCodeTargets: number[];
    readonly nested: ClassFileEntry[];
    readonly nestedPositions: number[][];
    readonly rewrite: number[];
    applyByteCodeTargetFixup(arg0: CodeAttribute): void;
    doWrite(arg0: DataOutputStream): void;
    equals(arg0: Object | null): boolean;
    extractOperands(arg0: OperandManager, arg1: Segment, arg2: number): void;
    getByteCodeForm(): ByteCodeForm;
    getByteCodeIndex(): number;
    getByteCodeTargets(): number[];
    getLength(): number;
    getName(): string;
    getNestedClassFileEntries(): ClassFileEntry[];
    getNestedPosition(arg0: number): number[];
    getNestedPositions(): number[][];
    getOpcode(): number;
    getRewrite(): number[];
    hasMultipleByteCodes(): boolean;
    hashCode(): number;
    nestedMustStartClassPool(): boolean;
    resolve(arg0: ClassConstantPool): void;
    setByteCodeIndex(arg0: number): void;
    setByteCodeTargets(arg0: number[]): void;
    setNested(arg0: ClassFileEntry[]): void;
    setNestedPositions(arg0: number[][]): void;
    setOperand2Bytes(arg0: number, arg1: number): void;
    setOperandByte(arg0: number, arg1: number): void;
    setOperandBytes(arg0: number[]): void;
    setOperandSigned2Bytes(arg0: number, arg1: number): void;
    setRewrite(arg0: number[]): void;
    toString(): string;
}
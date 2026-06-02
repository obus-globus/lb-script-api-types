import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ByteCode } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ByteCode.d.ts'
import type { CodeAttribute } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CodeAttribute.d.ts'
import type { OperandManager } from '../../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/OperandManager.d.ts'
export abstract class ByteCodeForm extends Object {
    static get(paramarg0: number): ByteCodeForm;
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: number[])
    // private firstOperandIndex: number;
    readonly name: string;
    readonly opcode: number;
    // private operandLength: number;
    readonly rewrite: number[];
    calculateOperandPosition(): void;
    firstOperandIndex(): number;
    fixUpByteCodeTargets(arg0: ByteCode, arg1: CodeAttribute): void;
    getName(): string;
    getOpcode(): number;
    getRewrite(): number[];
    getRewriteCopy(): number[];
    hasMultipleByteCodes(): boolean;
    hasNoOperand(): boolean;
    nestedMustStartClassPool(): boolean;
    operandLength(): number;
    setByteCodeOperands(arg0: ByteCode, arg1: OperandManager, arg2: number): void;
    toString(): string;
}
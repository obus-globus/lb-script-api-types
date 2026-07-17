import type { Instruction$Argument$Kind } from '../../../../../com/oracle/truffle/api/bytecode/Instruction$Argument$Kind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InstructionDescriptor$ArgumentDescriptor extends Object {
    constructor(token: Object)
    getKind(): Instruction$Argument$Kind;
    getLength(): number;
    getName(): string;
    toString(): string;
}
import type { InstructionDescriptor$ArgumentDescriptor } from '../../../../../com/oracle/truffle/api/bytecode/InstructionDescriptor$ArgumentDescriptor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class InstructionDescriptor extends Object {
    constructor(token: Object)
    equals(obj: Object | null): boolean;
    getArgumentDescriptors(): InstructionDescriptor$ArgumentDescriptor[];
    getLength(): number;
    getName(): string;
    getOperationCode(): number;
    hashCode(): number;
    isInstrumentation(): boolean;
    toString(): string;
}
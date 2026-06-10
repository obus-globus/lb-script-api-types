import type { Instruction } from '../../../../../com/oracle/truffle/api/bytecode/Instruction.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class Instruction$InstructionIterator extends Object implements Iterator<Instruction> {
    constructor(start: Instruction)
    // private current: Instruction;
    forEachRemaining(arg0: (param0: Instruction) => void): void;
    hasNext(): boolean;
    next(): Instruction;
}
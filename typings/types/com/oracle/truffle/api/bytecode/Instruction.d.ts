import type { BytecodeLocation } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeLocation.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { Instruction$Argument } from '../../../../../com/oracle/truffle/api/bytecode/Instruction$Argument.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Instruction extends Object {
    constructor(token: Object)
    equals(obj: Object | null): boolean;
    getArguments(): Instruction$Argument[];
    getBytecodeIndex(): number;
    getBytecodeNode(): BytecodeNode;
    getLength(): number;
    getLocation(): BytecodeLocation;
    getName(): string;
    getNextBytecodeIndex(): number;
    getOperationCode(): number;
    getSourceSection(): SourceSection;
    getSourceSections(): SourceSection[];
    hashCode(): number;
    isInstrumentation(): boolean;
    next(): Instruction;
    toString(): string;
}
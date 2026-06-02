import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShadowStack$ThreadLocalStack extends Object {
    constructor(null_: ShadowStack$ThreadLocalStack, thread: Thread)
    // private initialStackLength: number;
    // private initialStackLengthStable: Assumption;
    // private noStackOverflowedAssumption: Assumption;
    // private stack: StackTraceEntry[];
    // private stackIndex: number;
    // private stackOverflowed: boolean;
    // private thread: Thread;
    getStack(): StackTraceEntry[];
    getStackIndex(): number;
    getThread(): Thread;
    hasStackOverflowed(): boolean;
    // private initStack(instrumentedNode: Node): void;
    pop(location: StackTraceEntry): void;
    push(element: StackTraceEntry): void;
    top(): StackTraceEntry;
}
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractCompilationTask } from '../../../../../com/oracle/truffle/runtime/AbstractCompilationTask.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StatisticsListener$CallTargetNodeStatistics extends Object {
    constructor(task: AbstractCompilationTask)
    readonly callCountDirectCloned: number;
    readonly callCountDirectDispatched: number;
    readonly callCountDirectInlined: number;
    readonly callCountDirectNotCloned: number;
    readonly callCountIndirect: number;
    readonly loopCount: number;
    readonly nodeCount: number;
    getCallCount(): number;
    getCallCountDirect(): number;
    getCallCountDirectCloned(): number;
    getCallCountDirectDispatched(): number;
    getCallCountDirectInlined(): number;
    getCallCountDirectNotCloned(): number;
    getCallCountIndirect(): number;
    getLoopCount(): number;
    getNodeCount(): number;
    // private visitNode(node: Node): boolean;
}
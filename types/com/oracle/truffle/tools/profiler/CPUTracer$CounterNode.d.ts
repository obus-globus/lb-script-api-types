import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { CPUTracer$Payload } from '../../../../../com/oracle/truffle/tools/profiler/CPUTracer$Payload.d.ts'
export class CPUTracer$CounterNode extends ExecutionEventNode {
    constructor(payload: CPUTracer$Payload)
    // private payload: CPUTracer$Payload;
    onEnter(frame: VirtualFrame): void;
}
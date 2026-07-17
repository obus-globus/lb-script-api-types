import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { SandboxInstrument$SandboxContextNode } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument$SandboxContextNode.d.ts'
export class SandboxInstrument$StatementIncrementNode extends SandboxInstrument$SandboxContextNode {
    constructor(context: EventContext, limits: SandboxInstrument)
    // private seenOverflow: boolean;
    // private notifyStatementLimitReached(context: SandboxContext, actualCount: number, limit: number): void;
    onEnter(frame: VirtualFrame): void;
}
import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
export abstract class SandboxInstrument$SandboxContextNode extends ExecutionEventNode {
    constructor(context: EventContext, limits: SandboxInstrument)
    // private eventContext: EventContext;
    // private limits: SandboxInstrument;
    getLimitContext(): SandboxContext;
}
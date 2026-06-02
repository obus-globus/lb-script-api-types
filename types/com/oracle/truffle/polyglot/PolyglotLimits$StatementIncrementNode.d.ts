import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { PolyglotLimits$EngineLimits } from '../../../../com/oracle/truffle/polyglot/PolyglotLimits$EngineLimits.d.ts'
export class PolyglotLimits$StatementIncrementNode extends ExecutionEventNode {
    constructor(context: EventContext, limits: PolyglotLimits$EngineLimits)
    // private engine: PolyglotEngineImpl;
    // private eventContext: EventContext;
    // private limits: PolyglotLimits$EngineLimits;
    // private seenInnerContext: boolean;
    // private seenOverflow: boolean;
    // private getLimitContext(): PolyglotContextImpl;
    // private notifyStatementLimitReached(context: PolyglotContextImpl, actualCount: number, limit: number): void;
    onEnter(frame: VirtualFrame): void;
}
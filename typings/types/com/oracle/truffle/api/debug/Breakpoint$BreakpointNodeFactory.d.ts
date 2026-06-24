import type { Breakpoint } from '../../../../../com/oracle/truffle/api/debug/Breakpoint.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Breakpoint$BreakpointNodeFactory extends Object implements ExecutionEventNodeFactory {
    private constructor(null_: Breakpoint)
    create(context: EventContext): ExecutionEventNode;
}
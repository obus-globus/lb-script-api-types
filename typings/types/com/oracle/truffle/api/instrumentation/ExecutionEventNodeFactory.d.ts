import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExecutionEventNodeFactory extends Object{
    create(context: EventContext): ExecutionEventNode;
}
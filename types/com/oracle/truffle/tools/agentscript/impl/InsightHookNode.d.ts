import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { EventContext } from '../../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { ExecutionEventNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { NodeLibrary } from '../../../../../../com/oracle/truffle/api/interop/NodeLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { AgentType } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/AgentType.d.ts'
import type { EventContextObject } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/EventContextObject.d.ts'
import type { InsightFilter$Data } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightFilter$Data.d.ts'
import type { InsightInstrument } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument.d.ts'
import type { InsightInstrument$Key } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/InsightInstrument$Key.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class InsightHookNode extends ExecutionEventNode {
    private constructor(key: InsightInstrument$Key, insight: InsightInstrument, ctx: EventContext)
    // private checkApplicable: InteropLibrary;
    // private ctx: EventContext;
    // private enterDispatch: InteropLibrary;
    // private exceptionDispatch: InteropLibrary;
    // private exitDispatch: InteropLibrary;
    // private insight: InsightInstrument;
    // private instrumentedNode: Node;
    // private key: InsightInstrument$Key;
    // private nodeDispatch: NodeLibrary;
    // private rootName: string;
    // private src: Source;
    // private eventCtxObj(): EventContextObject;
    // private getVariables(frame: VirtualFrame, nodeEnter: boolean, returnValue: Object): Object;
    // private isApplicable(data: InsightFilter$Data, agentType: AgentType): boolean;
    // private loopHooks(frame: VirtualFrame, type: AgentType, returnValue: Object): void;
    onEnter(frame: VirtualFrame): void;
    onReturnExceptional(frame: VirtualFrame, exception: Throwable): void;
    onReturnValue(frame: VirtualFrame, returnValue: Object): void;
    onUnwind(frame: VirtualFrame, info: Object): Object;
    toString(): string;
}
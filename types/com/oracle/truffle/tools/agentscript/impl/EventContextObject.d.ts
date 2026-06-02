import type { EventContext } from '../../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { AbstractContextObject } from '../../../../../../com/oracle/truffle/tools/agentscript/impl/AbstractContextObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EventContextObject extends AbstractContextObject {
    constructor(context: EventContext)
    // private context: EventContext;
    getInstrumentedNode(): Node;
    getInstrumentedSourceSection(): SourceSection;
    readMember(member: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
    // private toStringImpl(): string;
}
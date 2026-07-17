import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DebuggerSession } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { StepConfig$Builder } from '../../../../../com/oracle/truffle/api/debug/StepConfig$Builder.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { EventContext } from '../../../../../com/oracle/truffle/api/instrumentation/EventContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StepConfig extends Object {
    static newBuilder(): StepConfig$Builder;
    constructor(sourceElements: SourceElement[], preferredAnchors: JavaMap<SourceElement, SuspendAnchor[]>, count: number)
    // private preferredAnchors: JavaMap<SourceElement, SuspendAnchor[]>;
    // private sourceElements: SourceElement[];
    // private stepCount: number;
    containsSourceElement(session: DebuggerSession, sourceElement: SourceElement): boolean;
    getCount(): number;
    getSourceElements(): SourceElement[];
    matches(session: DebuggerSession, context: EventContext, anchor: SuspendAnchor): boolean;
}
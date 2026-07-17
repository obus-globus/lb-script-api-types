import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { SourceElement } from '../../../../../com/oracle/truffle/api/debug/SourceElement.d.ts'
import type { StepConfig } from '../../../../../com/oracle/truffle/api/debug/StepConfig.d.ts'
import type { SuspendAnchor } from '../../../../../com/oracle/truffle/api/debug/SuspendAnchor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StepConfig$Builder extends Object {
    private constructor(null_: StepConfig)
    // private preferredAnchors: JavaMap<SourceElement, SuspendAnchor[]>;
    // private stepCount: number;
    // private stepElements: SourceElement[];
    build(): StepConfig;
    count(count: number): StepConfig$Builder;
    sourceElements(...elements: SourceElement[]): StepConfig$Builder;
    suspendAnchors(element: SourceElement, ...anchors: SuspendAnchor[]): StepConfig$Builder;
}
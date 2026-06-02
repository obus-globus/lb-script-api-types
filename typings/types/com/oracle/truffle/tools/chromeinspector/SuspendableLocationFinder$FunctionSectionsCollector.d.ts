import type { Instrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/Instrumenter.d.ts'
import type { LoadSourceSectionEvent } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionEvent.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { SuspendableLocationFinder$SectionsCollector } from '../../../../../com/oracle/truffle/tools/chromeinspector/SuspendableLocationFinder$SectionsCollector.d.ts'
export class SuspendableLocationFinder$FunctionSectionsCollector extends SuspendableLocationFinder$SectionsCollector {
    constructor(startIndex: number, instrumenter: Instrumenter)
    // private instrumenter: Instrumenter;
    // private rangeNode: Node;
    // private sectionsMap: Map<Node, SourceSection[]>;
    // private findRoot(node: Node): Node;
    getSections(): SourceSection[];
    onLoad(event: LoadSourceSectionEvent): void;
}
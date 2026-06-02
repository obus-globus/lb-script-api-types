import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { LoadSourceSectionEvent } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionEvent.d.ts'
import type { LoadSourceSectionListener } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NearestNode } from '../../../../../../org/graalvm/tools/lsp/server/utils/NearestNode.d.ts'
export class NearestSectionsFinder$NearestSections extends Object implements LoadSourceSectionListener {
    constructor(offset: number, checkInstrumentable: boolean)
    // private checkInstrumentable: boolean;
    // private containsMatch: SourceSection;
    // private containsNode: Node;
    // private nextMatch: SourceSection;
    readonly nextNode: Node;
    // private offset: number;
    // private previousMatch: SourceSection;
    readonly previousNode: Node;
    // private findOffsetApproximation(node: Node, sourceSection: SourceSection, o1: number, o2: number): void;
    getContainsNode(containsEnd: boolean): NearestNode;
    getContainsSourceSection(): SourceSection;
    getInstrumentableContainsNode(): InstrumentableNode;
    getInstrumentableNextNode(): InstrumentableNode;
    getInstrumentablePreviousNode(): InstrumentableNode;
    getNextNode(): NearestNode;
    getNextSourceSection(): SourceSection;
    getPreviousNode(): NearestNode;
    getPreviousSourceSection(): SourceSection;
    onLoad(event: LoadSourceSectionEvent): void;
}
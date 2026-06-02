import type { LoadSourceSectionEvent } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionEvent.d.ts'
import type { LoadSourceSectionListener } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionListener.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NearestNode } from '../../../../../../org/graalvm/tools/lsp/server/utils/NearestNode.d.ts'
export class NearestSectionsFinder$SectionsBefore extends Object implements LoadSourceSectionListener {
    constructor(line: number, column: number)
    // private closestBefore: SourceSection;
    // private column: number;
    // private hasExpression: boolean;
    // private line: number;
    // private node: Node;
    getNearestNode(): NearestNode;
    onLoad(event: LoadSourceSectionEvent): void;
}
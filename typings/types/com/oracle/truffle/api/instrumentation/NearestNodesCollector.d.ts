import type { InstrumentableNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { NearestNodesCollector$LinkedNodes } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$LinkedNodes.d.ts'
import type { NearestNodesCollector$NodeSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeSection.d.ts'
import type { NearestNodesCollector$Position } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$Position.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NearestNodesCollector extends Object {
    constructor(nearestFilter: NearestSectionFilter)
    // private anchorBefore: boolean;
    // private containsNode: NearestNodesCollector$LinkedNodes;
    // private containsSection: SourceSection;
    // private exactIndexNode: InstrumentableNode;
    // private exactIndexSection: SourceSection;
    // private exactLineNode: InstrumentableNode;
    // private exactLineSection: SourceSection;
    // private isOffsetInRoot: boolean;
    // private nextNode: NearestNodesCollector$LinkedNodes;
    // private nextSection: SourceSection;
    // private position: NearestNodesCollector$Position;
    // private previousNode: NearestNodesCollector$LinkedNodes;
    // private previousSection: SourceSection;
    // private tags: Class<Tag>[];
    // private findOffsetApproximation(node: InstrumentableNode, sourceSection: SourceSection, p1: NearestNodesCollector$Position, p2: NearestNodesCollector$Position): void;
    // private getContainsNode(): InstrumentableNode;
    getNearest(allProvidedTags: Class<Tag>[]): NearestNodesCollector$NodeSection;
    // private getNextNode(): InstrumentableNode;
    getPosition(): NearestNodesCollector$Position;
    // private getPreviousNode(): InstrumentableNode;
    // private isOtherInWithPosition(contains: Node, otherNode: Node, otherSection: SourceSection): boolean;
    loadedSection(node: Node, sourceSection: SourceSection, rootSection: SourceSection): void;
    // private matchSectionLine(node: InstrumentableNode, sourceSection: SourceSection): boolean;
    // private matchSectionPosition(node: InstrumentableNode, sourceSection: SourceSection, p1: NearestNodesCollector$Position, p2: NearestNodesCollector$Position): boolean;
}
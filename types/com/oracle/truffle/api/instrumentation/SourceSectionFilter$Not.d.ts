import type { SourceSectionFilter$EventFilterExpression } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$EventFilterExpression.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceSectionFilter$Not extends SourceSectionFilter$EventFilterExpression {
    constructor(delegate: SourceSectionFilter$EventFilterExpression)
    // private delegate: SourceSectionFilter$EventFilterExpression;
    collectReferencedTags(collectTags: Class<Object>[]): void;
    getOrder(): number;
    isIncluded(providedTags: Class<Object>[], instrumentedNode: Node, sourceSection: SourceSection): boolean;
    isRootIncluded(providedTags: Class<Object>[], rootSection: SourceSection, rootNode: RootNode, rootNodeBits: number): boolean;
    isSourceIncluded(source: Source): boolean;
    isSourceOnly(): boolean;
    toString(): string;
}
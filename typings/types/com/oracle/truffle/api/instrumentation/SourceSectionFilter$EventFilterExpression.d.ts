import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export abstract class SourceSectionFilter$EventFilterExpression extends Object implements Comparable<SourceSectionFilter$EventFilterExpression> {
    constructor()
    collectReferencedTags(collectTags: Class<Object>[]): void;
    compareTo(o: SourceSectionFilter$EventFilterExpression): number;
    getOrder(): number;
    isIncluded(providedTags: Class<Object>[], instrumentedNode: Node, sourceSection: SourceSection): boolean;
    isRootIncluded(providedTags: Class<Object>[], rootSection: SourceSection, rootNode: RootNode, rootNodeBits: number): boolean;
    isSourceIncluded(source: Source): boolean;
    isSourceOnly(): boolean;
}
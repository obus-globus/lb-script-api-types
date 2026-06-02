import type { SourceSectionFilter$Builder } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$Builder.d.ts'
import type { SourceSectionFilter$EventFilterExpression } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$EventFilterExpression.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceSectionFilter extends Object {
    static ANY: SourceSectionFilter;
    static newBuilder(): SourceSectionFilter$Builder;
    private constructor(expressions: SourceSectionFilter$EventFilterExpression[])
    // private expressions: SourceSectionFilter$EventFilterExpression[];
    getLimitedTags(): Class<Object>[];
    getReferencedTags(): Class<Object>[];
    includes(node: Node): boolean;
    includes(rootNode: RootNode, nodeSourceSection: SourceSection, originalTags: Class<Object>[]): boolean;
    // private includesImpl(node: Node, sourceSection: SourceSection): boolean;
    isInstrumentedNode(providedTags: Class<Object>[], instrumentedNode: Node, sourceSection: SourceSection): boolean;
    isInstrumentedRoot(providedTags: Class<Object>[], rootSourceSection: SourceSection, rootNode: RootNode, rootNodeBits: number): boolean;
    isInstrumentedSource(source: Source): boolean;
    isSourceOnly(): boolean;
    // private isTagExpression(exp: SourceSectionFilter$EventFilterExpression): boolean;
    toString(): string;
}
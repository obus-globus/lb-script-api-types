import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class EventBinding$Source<T extends Object | number | string | boolean> extends EventBinding<T> {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, filterSourceSection: SourceSectionFilter, inputFilter: SourceSectionFilter, element: T)
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, filterSourceSection: SourceSectionFilter, inputFilter: SourceSectionFilter, element: T, attached: boolean)
    // private filterSourceSection: SourceSectionFilter;
    // private inputFilter: SourceSectionFilter;
    getFilter(): SourceSectionFilter;
    getInputFilter(): SourceSectionFilter;
    getLimitedTags(): Class<Object>[];
    isChildInstrumentedFull(providedTags: Class<Object>[], rootNode: RootNode, parent: Node, parentSourceSection: SourceSection, current: Node, currentSourceSection: SourceSection): boolean;
    isChildInstrumentedLeaf(providedTags: Class<Object>[], rootNode: RootNode, parent: Node, parentSourceSection: SourceSection, current: Node, currentSourceSection: SourceSection): boolean;
    isExecutionEvent(): boolean;
    isInstrumentedFull(providedTags: Class<Object>[], rootNode: RootNode, node: Node, nodeSourceSection: SourceSection, isProbe: boolean): boolean;
    isInstrumentedLeaf(providedTags: Class<Object>[], instrumentedNode: Node, section: SourceSection): boolean;
    // private isInstrumentedNodeWithInputFilter(providedTags: Class<Object>[], current: Node, currentSourceSection: SourceSection): boolean;
    isInstrumentedRoot(providedTags: Class<Object>[], rootNode: RootNode, rootSourceSection: SourceSection, rootNodeBits: number): boolean;
    isInstrumentedSource(source: Source): boolean;
    isLanguageBinding(): boolean;
}
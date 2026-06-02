import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { NearestNodesCollector$NodeListSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeListSection.d.ts'
import type { NearestNodesCollector$NodeSection } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$NodeSection.d.ts'
import type { NearestSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/NearestSectionFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export abstract class EventBinding$NearestSourceSection<T extends Object | number | string | boolean> extends EventBinding$Source<T> {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, nearestFilter: NearestSectionFilter, filterSourceSection: SourceSectionFilter, element: T, attached: boolean)
    // private nearestFilter: NearestSectionFilter;
    // private nearestSourceSections: EconomicMap<Source, NearestNodesCollector$NodeListSection>;
    getNearestFilter(): NearestSectionFilter;
    getNearestNodes(): Node[];
    // private insertNearest(nearest: NearestNodesCollector$NodeSection): NearestNodesCollector$NodeListSection;
    isInstrumentedFull(providedTags: Class<Object>[], rootNode: RootNode, node: Node, nodeSourceSection: SourceSection, isProbe: boolean): boolean;
    // private isNearestSection(section: SourceSection): boolean;
    setTheNearest(nearest: NearestNodesCollector$NodeSection, visitingRootSourceSection: SourceSection, allTags: Class<Tag>[]): NearestNodesCollector$NodeListSection;
    // private updateNearest(nearest: NearestNodesCollector$NodeSection, visitingRootSourceSection: SourceSection, allTags: Class<Tag>[], oldNearest: NearestNodesCollector$NodeListSection): NearestNodesCollector$NodeListSection;
}
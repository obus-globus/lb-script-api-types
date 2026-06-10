import type { SourceFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceFilter.d.ts'
import type { SourceSectionFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter.d.ts'
import type { SourceSectionFilter$EventFilterExpression } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$EventFilterExpression.d.ts'
import type { SourceSectionFilter$IndexRange } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$IndexRange.d.ts'
import type { SourceSectionFilter$SourcePredicate } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$SourcePredicate.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceSectionFilter$Builder extends Object {
    private constructor(null_: SourceSectionFilter$Builder)
    // private availableSections: boolean;
    // private expressions: SourceSectionFilter$EventFilterExpression[];
    // private includeInternal: boolean;
    and(filter: SourceSectionFilter): SourceSectionFilter$Builder;
    build(): SourceSectionFilter;
    columnEndsIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    columnIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    columnIn(startColumn: number, length: number): SourceSectionFilter$Builder;
    columnNotIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    columnStartsIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    includeInternal(internal: boolean): SourceSectionFilter$Builder;
    indexIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    indexIn(startIndex: number, length: number): SourceSectionFilter$Builder;
    indexNotIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    lineEndsIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    lineIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    lineIn(startLine: number, length: number): SourceSectionFilter$Builder;
    lineIs(line: number): SourceSectionFilter$Builder;
    lineNotIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    lineStartsIn(ranges: SourceSectionFilter$IndexRange[]): SourceSectionFilter$Builder;
    mimeTypeIs(mimeTypes: string[]): SourceSectionFilter$Builder;
    rootNameIs(predicate: (param0: string) => boolean): SourceSectionFilter$Builder;
    rootSourceSectionEquals(section: SourceSection[]): SourceSectionFilter$Builder;
    sourceFilter(sourceFilter: SourceFilter): SourceSectionFilter$Builder;
    sourceIs(predicate: SourceSectionFilter$SourcePredicate): SourceSectionFilter$Builder;
    sourceIs(source: Source[]): SourceSectionFilter$Builder;
    sourceSectionAvailableOnly(availableOnly: boolean): SourceSectionFilter$Builder;
    sourceSectionEquals(section: SourceSection[]): SourceSectionFilter$Builder;
    tagIs(tags: Class<Object>[]): SourceSectionFilter$Builder;
    tagIsNot(tags: Class<Object>[]): SourceSectionFilter$Builder;
    // private verifyLineIndices(ranges: SourceSectionFilter$IndexRange[]): void;
}
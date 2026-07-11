import type { SourceFilter } from '../../../../../com/oracle/truffle/api/instrumentation/SourceFilter.d.ts'
import type { SourceSectionFilter$EventFilterExpression } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$EventFilterExpression.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceFilter$Builder extends Object {
    private constructor(null_: SourceFilter)
    // private expressions: SourceSectionFilter$EventFilterExpression[];
    // private includeInternal: boolean;
    build(): SourceFilter;
    includeInternal(internal: boolean): SourceFilter$Builder;
    languageIs(...languageIds: string[]): SourceFilter$Builder;
    sourceIs(predicate: (param0: Source) => boolean): SourceFilter$Builder;
    sourceIs(...source: Source[]): SourceFilter$Builder;
}
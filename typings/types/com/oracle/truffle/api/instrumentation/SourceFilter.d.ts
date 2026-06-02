import type { SourceFilter$Builder } from '../../../../../com/oracle/truffle/api/instrumentation/SourceFilter$Builder.d.ts'
import type { SourceSectionFilter$EventFilterExpression } from '../../../../../com/oracle/truffle/api/instrumentation/SourceSectionFilter$EventFilterExpression.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SourceFilter extends Object {
    static ANY: SourceFilter;
    static newBuilder(): SourceFilter$Builder;
    private constructor(expressions: SourceSectionFilter$EventFilterExpression[])
    // private expressions: SourceSectionFilter$EventFilterExpression[];
}
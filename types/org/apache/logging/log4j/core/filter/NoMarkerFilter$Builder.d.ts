import type { AbstractFilter$AbstractFilterBuilder } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilter$AbstractFilterBuilder.d.ts'
import type { NoMarkerFilter } from '../../../../../../org/apache/logging/log4j/core/filter/NoMarkerFilter.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class NoMarkerFilter$Builder extends AbstractFilter$AbstractFilterBuilder<NoMarkerFilter$Builder> implements Builder<NoMarkerFilter> {
    static ATTR_ON_MATCH: string;
    static ATTR_ON_MISMATCH: string;
    constructor()
    build(): NoMarkerFilter;
    getErrorPrefix(): string;
    isValid(): boolean;
}
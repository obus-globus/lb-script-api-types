import type { AbstractFilter$AbstractFilterBuilder } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilter$AbstractFilterBuilder.d.ts'
import type { DenyAllFilter } from '../../../../../../org/apache/logging/log4j/core/filter/DenyAllFilter.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class DenyAllFilter$Builder extends AbstractFilter$AbstractFilterBuilder<DenyAllFilter$Builder> implements Builder<DenyAllFilter> {
    static ATTR_ON_MATCH: string;
    static ATTR_ON_MISMATCH: string;
    constructor()
    build(): DenyAllFilter;
    getErrorPrefix(): string;
    isValid(): boolean;
}
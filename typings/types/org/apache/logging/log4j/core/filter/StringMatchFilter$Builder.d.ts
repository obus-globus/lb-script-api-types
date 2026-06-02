import type { AbstractFilter$AbstractFilterBuilder } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilter$AbstractFilterBuilder.d.ts'
import type { StringMatchFilter } from '../../../../../../org/apache/logging/log4j/core/filter/StringMatchFilter.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class StringMatchFilter$Builder extends AbstractFilter$AbstractFilterBuilder<StringMatchFilter$Builder> implements Builder<StringMatchFilter> {
    static ATTR_ON_MATCH: string;
    static ATTR_ON_MISMATCH: string;
    constructor()
    // private text: string;
    build(): StringMatchFilter;
    getErrorPrefix(): string;
    isValid(): boolean;
    setMatchString(text: string): StringMatchFilter$Builder;
    setText(text: string): StringMatchFilter$Builder;
}
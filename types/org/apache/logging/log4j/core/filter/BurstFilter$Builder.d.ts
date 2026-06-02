import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AbstractFilter$AbstractFilterBuilder } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilter$AbstractFilterBuilder.d.ts'
import type { BurstFilter } from '../../../../../../org/apache/logging/log4j/core/filter/BurstFilter.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class BurstFilter$Builder extends AbstractFilter$AbstractFilterBuilder<BurstFilter$Builder> implements Builder<BurstFilter> {
    static ATTR_ON_MATCH: string;
    static ATTR_ON_MISMATCH: string;
    constructor()
    // private level: Level;
    // private maxBurst: number;
    // private rate: number;
    build(): BurstFilter;
    getErrorPrefix(): string;
    isValid(): boolean;
    setLevel(level: Level): BurstFilter$Builder;
    setMaxBurst(maxBurst: number): BurstFilter$Builder;
    setRate(rate: number): BurstFilter$Builder;
}
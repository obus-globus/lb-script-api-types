import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AbstractFilter$AbstractFilterBuilder } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilter$AbstractFilterBuilder.d.ts'
import type { LevelMatchFilter } from '../../../../../../org/apache/logging/log4j/core/filter/LevelMatchFilter.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class LevelMatchFilter$Builder extends AbstractFilter$AbstractFilterBuilder<LevelMatchFilter$Builder> implements Builder<LevelMatchFilter> {
    static ATTR_ON_MATCH: string;
    static ATTR_ON_MISMATCH: string;
    constructor()
    // private level: Level;
    build(): LevelMatchFilter;
    getErrorPrefix(): string;
    isValid(): boolean;
    setLevel(level: Level): LevelMatchFilter$Builder;
}
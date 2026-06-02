import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class LoggerConfig$Builder<B extends LoggerConfig$Builder<B>> extends Object implements Builder<LoggerConfig> {
    constructor()
    readonly additivity: boolean;
    readonly config: Configuration;
    readonly filter: Filter;
    readonly includeLocation: string;
    readonly level: Level;
    readonly levelAndRefs: string;
    readonly loggerName: string;
    readonly properties: Property[];
    readonly refs: AppenderRef[];
    asBuilder(): B;
    build(): LoggerConfig;
    getConfig(): Configuration;
    getErrorPrefix(): string;
    getFilter(): Filter;
    getIncludeLocation(): string;
    getLevel(): Level;
    getLevelAndRefs(): string;
    getLoggerName(): string;
    getProperties(): Property[];
    getRefs(): AppenderRef[];
    isAdditivity(): boolean;
    isValid(): boolean;
    setFilter(filter: Filter): B;
    withAdditivity(additivity: boolean): B;
    withConfig(config: Configuration): B;
    withFilter(filter: Filter): B;
    withIncludeLocation(includeLocation: string): B;
    withLevel(level: Level): B;
    withLevelAndRefs(levelAndRefs: string): B;
    withLoggerName(loggerName: string): B;
    withProperties(properties: Property[]): B;
    withRefs(refs: AppenderRef[]): B;
    withtFilter(filter: Filter): B;
}
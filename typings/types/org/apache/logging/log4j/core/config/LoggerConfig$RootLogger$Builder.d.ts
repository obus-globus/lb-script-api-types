import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class LoggerConfig$RootLogger$Builder<B extends LoggerConfig$RootLogger$Builder<B>> extends Object implements Builder<LoggerConfig> {
    constructor()
    readonly additivity: boolean;
    readonly config: Configuration;
    readonly filter: Filter;
    readonly includeLocation: string;
    readonly level: Level;
    readonly levelAndRefs: string;
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
    getProperties(): Property[];
    getRefs(): AppenderRef[];
    isAdditivity(): boolean;
    isValid(): boolean;
    setAdditivity(additivity: boolean): B;
    setConfig(config: Configuration): B;
    setFilter(filter: Filter): B;
    setIncludeLocation(includeLocation: string): B;
    setLevel(level: Level): B;
    setLevelAndRefs(levelAndRefs: string): B;
    setProperties(properties: Property[]): B;
    setRefs(refs: AppenderRef[]): B;
    withAdditivity(additivity: boolean): B;
    withConfig(config: Configuration): B;
    withIncludeLocation(includeLocation: string): B;
    withLevel(level: Level): B;
    withLevelAndRefs(levelAndRefs: string): B;
    withProperties(properties: Property[]): B;
    withRefs(refs: AppenderRef[]): B;
    withtFilter(filter: Filter): B;
}
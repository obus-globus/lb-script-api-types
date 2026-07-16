import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AppenderControl } from '../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
import type { AppenderControlArraySet } from '../../../../../../org/apache/logging/log4j/core/config/AppenderControlArraySet.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig$Builder } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig$Builder.d.ts'
import type { LoggerConfig$LoggerConfigPredicate } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig$LoggerConfigPredicate.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { ReliabilityStrategy } from '../../../../../../org/apache/logging/log4j/core/config/ReliabilityStrategy.d.ts'
import type { AbstractFilterable } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilterable.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { LogEventFactory } from '../../../../../../org/apache/logging/log4j/core/impl/LogEventFactory.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class LoggerConfig extends AbstractFilterable implements LocationAware {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ROOT: string;
    static createLogger(paramadditivity: boolean, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static createLogger(paramadditivity: string, paramlevel: Level, paramloggerName: string, paramincludeLocation: string, paramrefs: AppenderRef[], paramproperties: Property[], paramconfig: Configuration, paramfilter: Filter): LoggerConfig;
    static newBuilder<B extends LoggerConfig$Builder<B>>(): B;
    constructor()
    constructor(name: string, appenders: AppenderRef[], filter: Filter, level: Level, additive: boolean, properties: Property[], config: Configuration, includeLocation: boolean)
    constructor(name: string, level: Level, additive: boolean)
    readonly additive: boolean;
    readonly appenderRefs: AppenderRef[];
    readonly appenders: AppenderControlArraySet;
    // private config: Configuration;
    readonly includeLocation: boolean;
    readonly level: Level;
    readonly logEventFactory: LogEventFactory;
    readonly name: string;
    readonly parent: LoggerConfig;
    readonly properties: Property[];
    // private propertiesMap: Map<Property, boolean>;
    readonly propertiesRequireLookup: boolean;
    readonly reliabilityStrategy: ReliabilityStrategy;
    addAppender(appender: Appender, level: Level, filter: Filter): void;
    callAppenders(event: LogEvent): void;
    // private cleanupFilter(ctl: AppenderControl): void;
    clearAppenders(): void;
    getAppenderRefs(): AppenderRef[];
    getAppenders(): { [key: string]: Appender };
    getExplicitLevel(): Level;
    getFilter(): Filter;
    getLevel(): Level;
    getLogEventFactory(): LogEventFactory;
    getName(): string;
    getParent(): LoggerConfig;
    getProperties(): Map<Property, boolean>;
    // private getProperties(loggerName: string, fqcn: string, marker: Marker, level: Level, data: Message, t: Throwable): Property[];
    // private getPropertiesWithLookups(loggerName: string, fqcn: string, marker: Marker, level: Level, data: Message, t: Throwable, props: Property[]): Property[];
    getPropertyList(): Property[];
    getReliabilityStrategy(): ReliabilityStrategy;
    hasAppenders(): boolean;
    isAdditive(): boolean;
    isIncludeLocation(): boolean;
    isPropertiesRequireLookup(): boolean;
    // private location(fqcn: string): StackTraceElement;
    log(loggerName: string, fqcn: string, location: StackTraceElement, marker: Marker, level: Level, data: Message, t: Throwable): void;
    log(loggerName: string, fqcn: string, marker: Marker, level: Level, data: Message, t: Throwable): void;
    log(event: LogEvent): void;
    log(event: LogEvent, predicate: LoggerConfig$LoggerConfigPredicate): void;
    // private logParent(event: LogEvent, predicate: LoggerConfig$LoggerConfigPredicate): void;
    processLogEvent(event: LogEvent, predicate: LoggerConfig$LoggerConfigPredicate): void;
    removeAppender(name: string): void;
    requiresLocation(): boolean;
    setAdditive(additive: boolean): void;
    setLevel(level: Level): void;
    setLogEventFactory(logEventFactory: LogEventFactory): void;
    setParent(parent: LoggerConfig): void;
    toString(): string;
}
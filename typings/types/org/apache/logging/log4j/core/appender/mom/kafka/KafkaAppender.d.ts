import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Future } from '../../../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { KafkaAppender$Builder } from '../../../../../../../../org/apache/logging/log4j/core/appender/mom/kafka/KafkaAppender$Builder.d.ts'
import type { KafkaManager } from '../../../../../../../../org/apache/logging/log4j/core/appender/mom/kafka/KafkaManager.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
export class KafkaAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramlayout: Layout<Serializable>, paramfilter: Filter, paramname: string, paramignoreExceptions: boolean, paramtopic: string, paramproperties: Property[], paramconfiguration: Configuration, paramkey: string): KafkaAppender;
    static newBuilder<B extends KafkaAppender$Builder<B>>(): B;
    static parseInt(params: string, paramdefaultValue: number): number;
    private constructor(name: string, layout: Layout<Serializable>, filter: Filter, ignoreExceptions: boolean, manager: KafkaManager, properties: Property[], retryCount: number)
    // private manager: KafkaManager;
    // private retryCount: number;
    append(event: LogEvent): void;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
    toString(): string;
    // private tryAppend(event: LogEvent): void;
}
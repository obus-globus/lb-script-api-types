import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractOutputStreamAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractOutputStreamAppender.d.ts'
import type { SocketAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/SocketAppender$Builder.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { AbstractSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/AbstractSocketManager.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
import type { Protocol } from '../../../../../../org/apache/logging/log4j/core/net/Protocol.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
export class SocketAppender extends AbstractOutputStreamAppender<AbstractSocketManager> {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramhost: string, paramport: number, paramprotocol: Protocol, paramsslConfig: SslConfiguration, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramname: string, paramimmediateFlush: boolean, paramignoreExceptions: boolean, paramlayout: Layout<Object>, paramfilter: Filter, paramadvertise: boolean, paramconfiguration: Configuration): SocketAppender;
    static createAppender(paramhost: string, paramportNum: string, paramprotocolIn: string, paramsslConfig: SslConfiguration, paramconnectTimeoutMillis: number, paramdelayMillis: string, paramimmediateFail: string, paramname: string, paramimmediateFlush: string, paramignore: string, paramlayout: Layout<Object>, paramfilter: Filter, paramadvertise: string, paramconfig: Configuration): SocketAppender;
    static newBuilder(): SocketAppender$Builder;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(name: string, layout: Layout<Serializable>, filter: Filter, manager: AbstractSocketManager, ignoreExceptions: boolean, immediateFlush: boolean, advertiser: Advertiser)
    constructor(name: string, layout: Layout<Serializable>, filter: Filter, manager: AbstractSocketManager, ignoreExceptions: boolean, immediateFlush: boolean, advertiser: Advertiser, properties: Property[])
    // private advertisement: Object;
    // private advertiser: Advertiser;
    directEncodeEvent(event: LogEvent): void;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}
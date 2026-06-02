import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { SocketAppender } from '../../../../../../org/apache/logging/log4j/core/appender/SocketAppender.d.ts'
import type { SocketAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/SocketAppender$Builder.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { AbstractSocketManager } from '../../../../../../org/apache/logging/log4j/core/net/AbstractSocketManager.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
import type { Facility } from '../../../../../../org/apache/logging/log4j/core/net/Facility.d.ts'
import type { Protocol } from '../../../../../../org/apache/logging/log4j/core/net/Protocol.d.ts'
import type { SslConfiguration } from '../../../../../../org/apache/logging/log4j/core/net/ssl/SslConfiguration.d.ts'
export class SyslogAppender extends SocketAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: (Object | null)[];
    static createAppender(paramhost: string, paramport: number, paramprotocolStr: string, paramsslConfiguration: SslConfiguration, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramname: string, paramimmediateFlush: boolean, paramignoreExceptions: boolean, paramfacility: Facility, paramid: string, paramenterpriseNumber: number, paramincludeMdc: boolean, parammdcId: string, parammdcPrefix: string, parameventPrefix: string, paramnewLine: boolean, paramescapeNL: string, paramappName: string, parammsgId: string, paramexcludes: string, paramincludes: string, paramrequired: string, paramformat: string, paramfilter: Filter, paramconfiguration: Configuration, paramcharset: Charset, paramexceptionPattern: string, paramloggerFields: (Object | null)[], paramadvertise: boolean): SyslogAppender;
    static createAppender(paramhost: string, paramport: number, paramprotocol: Protocol, paramsslConfig: SslConfiguration, paramconnectTimeoutMillis: number, paramreconnectDelayMillis: number, paramimmediateFail: boolean, paramname: string, paramimmediateFlush: boolean, paramignoreExceptions: boolean, paramlayout: Layout<Object>, paramfilter: Filter, paramadvertise: boolean, paramconfiguration: Configuration): SocketAppender;
    static createAppender(paramhost: string, paramportNum: string, paramprotocolIn: string, paramsslConfig: SslConfiguration, paramconnectTimeoutMillis: number, paramdelayMillis: string, paramimmediateFail: string, paramname: string, paramimmediateFlush: string, paramignore: string, paramlayout: Layout<Object>, paramfilter: Filter, paramadvertise: string, paramconfig: Configuration): SocketAppender;
    static newBuilder(): SocketAppender$Builder;
    static newSyslogAppenderBuilder(): Object | null;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(name: string, layout: Layout<Serializable>, filter: Filter, ignoreExceptions: boolean, immediateFlush: boolean, manager: AbstractSocketManager, advertiser: Advertiser)
    constructor(name: string, layout: Layout<Serializable>, filter: Filter, ignoreExceptions: boolean, immediateFlush: boolean, manager: AbstractSocketManager, advertiser: Advertiser, properties: Property[])
}
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Layout } from '../../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AbstractAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AbstractAppender.d.ts'
import type { SmtpAppender$Builder } from '../../../../../../org/apache/logging/log4j/core/appender/SmtpAppender$Builder.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { MailManager } from '../../../../../../org/apache/logging/log4j/core/net/MailManager.d.ts'
export class SmtpAppender extends AbstractAppender {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static ELEMENT_TYPE: string;
    static EMPTY_ARRAY: Appender[];
    static createAppender(paramconfig: Configuration, paramname: string, paramto: string, paramcc: string, parambcc: string, paramfrom: string, paramreplyTo: string, paramsubject: string, paramsmtpProtocol: string, paramsmtpHost: string, paramsmtpPortStr: string, paramsmtpUsername: string, paramsmtpPassword: string, paramsmtpDebug: string, parambufferSizeStr: string, paramlayout: Layout<Serializable>, paramfilter: Filter, paramignore: string): SmtpAppender;
    static newBuilder(): SmtpAppender$Builder;
    static parseInt(params: string, paramdefaultValue: number): number;
    constructor(arg0: string, arg1: Filter, arg2: Layout<Serializable>, arg3: MailManager, arg4: boolean, arg5: Property[], arg6: any)
    readonly manager: MailManager;
    append(event: LogEvent): void;
    getManager(): MailManager;
    isFiltered(event: LogEvent): boolean;
}
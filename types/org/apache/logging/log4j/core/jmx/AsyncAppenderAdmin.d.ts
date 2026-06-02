import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsyncAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AsyncAppender.d.ts'
import type { AsyncAppenderAdminMBean } from '../../../../../../org/apache/logging/log4j/core/jmx/AsyncAppenderAdminMBean.d.ts'
export class AsyncAppenderAdmin extends Object implements AsyncAppenderAdminMBean {
    static PATTERN: string;
    constructor(contextName: string, appender: AsyncAppender)
    // private asyncAppender: AsyncAppender;
    // private contextName: string;
    readonly objectName: ObjectName;
    getAppenderRefs(): string[];
    getErrorHandler(): string;
    getErrorRef(): string;
    getFilter(): string;
    getLayout(): string;
    getName(): string;
    getObjectName(): ObjectName;
    getQueueCapacity(): number;
    getQueueRemainingCapacity(): number;
    isBlocking(): boolean;
    isIgnoreExceptions(): boolean;
    isIncludeLocation(): boolean;
}
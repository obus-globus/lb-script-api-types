import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { AppenderAdminMBean } from '../../../../../../org/apache/logging/log4j/core/jmx/AppenderAdminMBean.d.ts'
export class AppenderAdmin extends Object implements AppenderAdminMBean {
    static PATTERN: string;
    constructor(contextName: string, appender: Appender)
    // private appender: Appender;
    // private contextName: string;
    readonly objectName: ObjectName;
    getErrorHandler(): string;
    getFilter(): string;
    getLayout(): string;
    getName(): string;
    getObjectName(): ObjectName;
    isIgnoreExceptions(): boolean;
}
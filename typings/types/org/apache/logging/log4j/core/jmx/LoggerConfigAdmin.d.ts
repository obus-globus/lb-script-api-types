import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { LoggerConfigAdminMBean } from '../../../../../../org/apache/logging/log4j/core/jmx/LoggerConfigAdminMBean.d.ts'
export class LoggerConfigAdmin extends Object implements LoggerConfigAdminMBean {
    static PATTERN: string;
    constructor(loggerContext: LoggerContext, loggerConfig: LoggerConfig)
    // private loggerConfig: LoggerConfig;
    // private loggerContext: LoggerContext;
    readonly objectName: ObjectName;
    getAppenderRefs(): string[];
    getFilter(): string;
    getLevel(): string;
    getName(): string;
    getObjectName(): ObjectName;
    isAdditive(): boolean;
    isIncludeLocation(): boolean;
    setAdditive(additive: boolean): void;
    setLevel(level: string): void;
}
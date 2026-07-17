import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { PropertyChangeEvent } from '../../../../../../java/beans/PropertyChangeEvent.d.ts'
import type { PropertyChangeListener } from '../../../../../../java/beans/PropertyChangeListener.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { NotificationBroadcasterSupport } from '../../../../../../javax/management/NotificationBroadcasterSupport.d.ts'
import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerContextAdminMBean } from '../../../../../../org/apache/logging/log4j/core/jmx/LoggerContextAdminMBean.d.ts'
export class LoggerContextAdmin extends NotificationBroadcasterSupport implements PropertyChangeListener, LoggerContextAdminMBean {
    static NOTIF_TYPE_RECONFIGURED: string;
    static PATTERN: string;
    constructor(loggerContext: LoggerContext, executor: Executor)
    // private loggerContext: LoggerContext;
    readonly objectName: ObjectName;
    // private sequenceNo: AtomicLong;
    // private getConfig(): Configuration;
    getConfigClassName(): string;
    getConfigFilter(): string;
    getConfigLocationUri(): string;
    getConfigName(): string;
    getConfigProperties(): JavaMap<string, string>;
    getConfigText(): string;
    getConfigText(charsetName: string): string;
    getName(): string;
    getObjectName(): ObjectName;
    getStatus(): string;
    // private nextSeqNo(): number;
    // private now(): number;
    propertyChange(evt: PropertyChangeEvent): void;
    // private readContents(in_: InputStream, charset: Charset): string;
    setConfigLocationUri(configLocation: string): void;
    setConfigText(configText: string, charsetName: string): void;
}
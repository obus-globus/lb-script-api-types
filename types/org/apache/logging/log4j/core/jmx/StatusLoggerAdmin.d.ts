import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { MBeanRegistration } from '../../../../../../javax/management/MBeanRegistration.d.ts'
import type { MBeanServer } from '../../../../../../javax/management/MBeanServer.d.ts'
import type { NotificationBroadcasterSupport } from '../../../../../../javax/management/NotificationBroadcasterSupport.d.ts'
import type { NotificationFilter } from '../../../../../../javax/management/NotificationFilter.d.ts'
import type { NotificationListener } from '../../../../../../javax/management/NotificationListener.d.ts'
import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { StatusLoggerAdminMBean } from '../../../../../../org/apache/logging/log4j/core/jmx/StatusLoggerAdminMBean.d.ts'
import type { StatusData } from '../../../../../../org/apache/logging/log4j/status/StatusData.d.ts'
import type { StatusListener } from '../../../../../../org/apache/logging/log4j/status/StatusListener.d.ts'
export class StatusLoggerAdmin extends NotificationBroadcasterSupport implements MBeanRegistration, StatusLoggerAdminMBean, StatusListener {
    static NOTIF_TYPE_DATA: string;
    static NOTIF_TYPE_MESSAGE: string;
    static PATTERN: string;
    constructor(contextName: string, executor: Executor)
    readonly contextName: string;
    readonly level: Level;
    readonly objectName: ObjectName;
    // private sequenceNo: AtomicLong;
    // private statusListenerRegistered: boolean;
    // private statusListenerRegistrationGuard: Lock;
    addNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: Object): void;
    close(): void;
    getContextName(): string;
    getLevel(): string;
    getObjectName(): ObjectName;
    getStatusData(): StatusData[];
    getStatusDataHistory(): string[];
    getStatusLevel(): Level;
    log(data: StatusData): void;
    // private nextSeqNo(): number;
    // private nowMillis(): number;
    postDeregister(): void;
    postRegister(registrationDone: boolean): void;
    preDeregister(): void;
    preRegister(server: MBeanServer, name: ObjectName): ObjectName;
    setLevel(level: string): void;
}
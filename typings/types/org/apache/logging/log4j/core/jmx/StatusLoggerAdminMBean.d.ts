import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StatusData } from '../../../../../../org/apache/logging/log4j/status/StatusData.d.ts'
export interface StatusLoggerAdminMBean extends Object{
    getContextName(): string;
    getLevel(): string;
    getObjectName(): ObjectName;
    getStatusData(): StatusData[];
    getStatusDataHistory(): string[];
    setLevel(level: string): void;
}
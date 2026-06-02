import type { ObjectName } from '../../../../../../javax/management/ObjectName.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LoggerContextAdminMBean extends Object{
    getConfigClassName(): string;
    getConfigFilter(): string;
    getConfigLocationUri(): string;
    getConfigName(): string;
    getConfigProperties(): { [key: string]: string };
    getConfigText(): string;
    getConfigText(charsetName: string): string;
    getName(): string;
    getObjectName(): ObjectName;
    getStatus(): string;
    setConfigLocationUri(configLocation: string): void;
    setConfigText(configText: string, charsetName: string): void;
}
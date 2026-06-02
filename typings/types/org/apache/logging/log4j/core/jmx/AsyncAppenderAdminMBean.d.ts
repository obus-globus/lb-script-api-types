import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AsyncAppenderAdminMBean extends Object{
    getAppenderRefs(): string[];
    getErrorHandler(): string;
    getErrorRef(): string;
    getFilter(): string;
    getLayout(): string;
    getName(): string;
    getQueueCapacity(): number;
    getQueueRemainingCapacity(): number;
    isBlocking(): boolean;
    isIgnoreExceptions(): boolean;
    isIncludeLocation(): boolean;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LoggerConfigAdminMBean extends Object{
    getAppenderRefs(): string[];
    getFilter(): string;
    getLevel(): string;
    getName(): string;
    isAdditive(): boolean;
    isIncludeLocation(): boolean;
    setAdditive(additive: boolean): void;
    setLevel(level: string): void;
}
import type { Object } from '../../../java/lang/Object.d.ts'
export interface LoggingMXBean extends Object{
    getLoggerLevel(arg0: string): string;
    getLoggerNames(): string[];
    getParentLoggerName(arg0: string): string;
    setLoggerLevel(arg0: string, arg1: string): void;
}
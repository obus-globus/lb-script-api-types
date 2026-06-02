import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LoggerNameAwareMessage extends Object{
    getLoggerName(): string;
    setLoggerName(name: string): void;
}
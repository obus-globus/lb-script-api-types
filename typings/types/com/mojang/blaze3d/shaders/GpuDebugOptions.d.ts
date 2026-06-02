import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuDebugOptions extends Record {
    // private logLevel: number;
    // private synchronousLogs: boolean;
    // private useLabels: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    logLevel(): number;
    synchronousLogs(): boolean;
    toString(): string;
    useLabels(): boolean;
}
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuDebugOptions extends Record {
    constructor(logLevel: number, synchronousLogs: boolean, useLabels: boolean, useValidationLayers: boolean)
    // private logLevel: number;
    // private synchronousLogs: boolean;
    // private useLabels: boolean;
    // private useValidationLayers: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    logLevel(): number;
    synchronousLogs(): boolean;
    toString(): string;
    useLabels(): boolean;
    useValidationLayers(): boolean;
}
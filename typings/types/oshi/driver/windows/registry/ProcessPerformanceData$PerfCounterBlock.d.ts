import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProcessPerformanceData$PerfCounterBlock extends Object {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
    readonly bytesRead: number;
    readonly bytesWritten: number;
    readonly name: string;
    readonly pageFaults: number;
    readonly parentProcessID: number;
    readonly priority: number;
    readonly residentSetSize: number;
    readonly startTime: number;
    readonly upTime: number;
    getBytesRead(): number;
    getBytesWritten(): number;
    getName(): string;
    getPageFaults(): number;
    getParentProcessID(): number;
    getPriority(): number;
    getResidentSetSize(): number;
    getStartTime(): number;
    getUpTime(): number;
}
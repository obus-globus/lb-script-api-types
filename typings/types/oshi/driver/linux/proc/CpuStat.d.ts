import type { Object } from '../../../../java/lang/Object.d.ts'
export class CpuStat extends Object {
    static getBootTime(): number;
    static getContextSwitches(): number;
    static getInterrupts(): number;
    static getProcessorCpuLoadTicks(paramarg0: number): number[][];
    static getSystemCpuLoadTicks(): number[];
    private constructor()
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSProcess$State } from '../../../oshi/software/os/OSProcess$State.d.ts'
export class ThreadInfo$ThreadStats extends Object {
    constructor(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number)
    readonly priority: number;
    readonly state: OSProcess$State;
    readonly systemTime: number;
    readonly threadId: number;
    readonly upTime: number;
    readonly userTime: number;
    getPriority(): number;
    getState(): OSProcess$State;
    getSystemTime(): number;
    getThreadId(): number;
    getUpTime(): number;
    getUserTime(): number;
}
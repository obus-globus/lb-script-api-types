import type { Object } from '../../../java/lang/Object.d.ts'
import type { OSService$State } from '../../../oshi/software/os/OSService$State.d.ts'
export class OSService extends Object {
    constructor(arg0: string, arg1: number, arg2: OSService$State)
    readonly name: string;
    readonly processID: number;
    readonly state: OSService$State;
    getName(): string;
    getProcessID(): number;
    getState(): OSService$State;
}
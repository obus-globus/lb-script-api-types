import type { Object } from '../../../java/lang/Object.d.ts'
export interface StateMachineDnsCall$State extends Object{
    readonly canceled: boolean;
    cancel(): StateMachineDnsCall$State;
}
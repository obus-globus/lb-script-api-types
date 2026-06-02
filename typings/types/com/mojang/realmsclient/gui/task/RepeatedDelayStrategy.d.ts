import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RepeatedDelayStrategy extends Object{
    delayCyclesAfterFailure(): number;
    delayCyclesAfterSuccess(): number;
}
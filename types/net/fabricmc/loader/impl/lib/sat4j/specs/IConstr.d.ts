import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IConstr extends Object{
    canBePropagatedMultipleTimes(): boolean;
    get(arg0: number): number;
    getActivity(): number;
    learnt(): boolean;
    size(): number;
}
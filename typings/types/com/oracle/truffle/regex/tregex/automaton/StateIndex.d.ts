import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface StateIndex<S extends unknown> extends Object{
    getId(state: S): number;
    getNumberOfStates(): number;
    getState(id: number): S;
    isEmpty(): boolean;
}
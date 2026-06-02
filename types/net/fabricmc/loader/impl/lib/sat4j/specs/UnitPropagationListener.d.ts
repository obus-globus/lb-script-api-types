import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Constr } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export interface UnitPropagationListener extends Object{
    enqueue(arg0: number): boolean;
    enqueue(arg0: number, arg1: Constr): boolean;
    getPropagationLevel(): number;
    unset(arg0: number): void;
}
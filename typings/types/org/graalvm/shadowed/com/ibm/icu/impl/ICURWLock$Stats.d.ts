import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ICURWLock$Stats extends Object {
    private constructor()
    private constructor(rc: number, mrc: number, wrc: number, wc: number, wwc: number)
    private constructor(rhs: ICURWLock$Stats)
    _mrc: number;
    _rc: number;
    _wc: number;
    _wrc: number;
    _wwc: number;
    toString(): string;
}
import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CyclicAssumption extends Object {
    constructor(name: string)
    readonly assumption: Assumption;
    // private name: string;
    getAssumption(): Assumption;
    invalidate(): void;
    invalidate(message: string): void;
}
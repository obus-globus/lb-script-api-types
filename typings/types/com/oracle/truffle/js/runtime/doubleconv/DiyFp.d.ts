import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DiyFp extends Object {
    constructor()
    constructor(f: number, e: number)
    // private e_: number;
    // private f_: number;
    e(): number;
    f(): number;
    multiply(other: DiyFp): void;
    normalize(): void;
    setE(new_value: number): void;
    setF(new_value: number): void;
    subtract(other: DiyFp): void;
    toString(): string;
}
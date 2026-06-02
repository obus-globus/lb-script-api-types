import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ConstantPoolEntry extends Object {
    constructor()
    readonly index: number;
    getIndex(): number;
    setIndex(arg0: number): void;
}
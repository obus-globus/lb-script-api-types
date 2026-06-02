import type { Object } from '../../../java/lang/Object.d.ts'
export class Dimension extends Object {
    constructor()
    constructor(arg0: string, arg1: string)
    readonly name: string;
    readonly value: string;
    getName(): string;
    getValue(): string;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Output<T extends unknown> extends Object {
    constructor()
    constructor(arg0: T)
    value: T;
    toString(): string;
}
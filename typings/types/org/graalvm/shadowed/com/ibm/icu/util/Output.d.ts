import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Output<T extends Object | number | string | boolean> extends Object {
    constructor()
    constructor(value: T)
    value: T;
    toString(): string;
}
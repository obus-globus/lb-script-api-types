import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingObject extends Object {
    constructor()
    delegate(): Object;
    toString(): string;
}
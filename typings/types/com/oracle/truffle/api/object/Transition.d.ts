import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Transition extends Object {
    constructor()
    equals(obj: Object | null): boolean;
    hasConstantLocation(): boolean;
    hashCode(): number;
    isDirect(): boolean;
}
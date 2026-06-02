import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CharMatcher extends Object {
    constructor()
    estimatedCost(): number;
    match(c: number): boolean;
}
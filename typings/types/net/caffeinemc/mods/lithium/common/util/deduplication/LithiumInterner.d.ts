import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LithiumInterner<T extends unknown> extends Object {
    constructor()
    // private canonicalStorage: T[];
    deleteCanonical(arg0: T): void;
    getCanonical<S extends T>(arg0: S): S;
}
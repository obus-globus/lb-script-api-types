import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Record extends Object {
    constructor()
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
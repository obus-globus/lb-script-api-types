import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BookModel$State extends Record {
    static forAnimation(paramprogress: number, parampageFlip1: number, parampageFlip2: number, paramopenness: number): BookModel$State;
    // private openness: number;
    // private pageFlip1: number;
    // private pageFlip2: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    openness(): number;
    pageFlip1(): number;
    pageFlip2(): number;
    toString(): string;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenStream extends Object {
    constructor()
    // private base: number;
    // private buffer: number[];
    // private count: number;
    // private in: number;
    // private out: number;
    commit(k: number): void;
    get(k: number): number;
    grow(): void;
    // private index(k: number): number;
    isEmpty(): boolean;
    isFull(): boolean;
    last(): number;
    // private next(position: number): number;
    put(token: number): void;
    reset(): void;
}
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../../java/lang/Cloneable.d.ts'
export class DictionaryBreakEngine$DequeI extends Object implements Cloneable {
    constructor()
    // private data: number[];
    // private firstIdx: number;
    // private lastIdx: number;
    protected clone(): Object;
    clone(): Object;
    contains(v: number): boolean;
    elementAt(i: number): number;
    // private grow(): void;
    isEmpty(): boolean;
    offer(v: number): void;
    peek(): number;
    peekLast(): number;
    pollLast(): number;
    pop(): number;
    push(v: number): void;
    removeAllElements(): void;
    size(): number;
}
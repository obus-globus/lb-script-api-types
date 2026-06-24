import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class DictionaryBreakEngine$DequeI extends Object implements Cloneable {
    constructor()
    // private data: number[];
    // private firstIdx: number;
    // private lastIdx: number;
    clone(): DictionaryBreakEngine$DequeI;
    protected clone(): Object;
    contains(arg0: number): boolean;
    elementAt(arg0: number): number;
    // private grow(): void;
    isEmpty(): boolean;
    offer(arg0: number): void;
    peek(): number;
    peekLast(): number;
    pollLast(): number;
    pop(): number;
    push(arg0: number): void;
    removeAllElements(): void;
    size(): number;
}
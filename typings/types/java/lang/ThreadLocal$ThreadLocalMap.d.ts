import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { ThreadLocal$ThreadLocalMap$Entry } from '../../java/lang/ThreadLocal$ThreadLocalMap$Entry.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ThreadLocal$ThreadLocalMap extends Object {
    private constructor()
    private constructor(arg0: ThreadLocal$ThreadLocalMap)
    constructor(arg0: ThreadLocal<Object>, arg1: Object)
    // private size: number;
    // private table: ThreadLocal$ThreadLocalMap$Entry[];
    // private threshold: number;
    // private cleanSomeSlots(arg0: number, arg1: number): boolean;
    // private expungeStaleEntries(): void;
    // private expungeStaleEntry(arg0: number): number;
    // private getEntry(arg0: ThreadLocal<Object>): ThreadLocal$ThreadLocalMap$Entry;
    // private getEntryAfterMiss(arg0: ThreadLocal<Object>, arg1: number, arg2: ThreadLocal$ThreadLocalMap$Entry): ThreadLocal$ThreadLocalMap$Entry;
    // private rehash(): void;
    // private remove(arg0: ThreadLocal<Object>): void;
    // private replaceStaleEntry(arg0: ThreadLocal<Object>, arg1: Object, arg2: number): void;
    // private resize(): void;
    // private set(arg0: ThreadLocal<Object>, arg1: Object): void;
    // private setThreshold(arg0: number): void;
    size(): number;
}
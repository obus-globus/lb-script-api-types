import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ThreadLocal } from '../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ThreadLocalMapOfStacks extends Object {
    constructor()
    // private tlMapOfStacks: ThreadLocal<JavaMap<string, string[]>>;
    clearDequeByKey(arg0: string): void;
    getCopyOfDequeByKey(arg0: string): string[];
    popByKey(arg0: string): string;
    pushByKey(arg0: string, arg1: string): void;
}
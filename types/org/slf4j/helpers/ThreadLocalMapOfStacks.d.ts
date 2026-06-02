import type { ThreadLocal } from '../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ThreadLocalMapOfStacks extends Object {
    constructor()
    // private tlMapOfStacks: ThreadLocal<{ [key: string]: string[] }>;
    clearDequeByKey(arg0: string): void;
    getCopyOfDequeByKey(arg0: string): string[];
    popByKey(arg0: string): string;
    pushByKey(arg0: string, arg1: string): void;
}
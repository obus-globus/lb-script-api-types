import type { ThreadLocal } from '../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Log4jMDCAdapter$ThreadLocalMapOfStacks extends Object {
    constructor(arg0: any)
    // private tlMapOfStacks: ThreadLocal<{ [key: string]: string[] }>;
    clearByKey(key: string): void;
    getCopyOfDequeByKey(key: string): string[];
    peekByKey(key: string): string;
    popByKey(key: string): string;
    pushByKey(key: string, value: string): void;
}
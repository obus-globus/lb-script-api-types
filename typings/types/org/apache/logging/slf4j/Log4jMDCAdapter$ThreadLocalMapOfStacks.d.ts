import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ThreadLocal } from '../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Log4jMDCAdapter$ThreadLocalMapOfStacks extends Object {
    private constructor()
    // private tlMapOfStacks: ThreadLocal<JavaMap<string, string[]>>;
    clearByKey(key: string): void;
    getCopyOfDequeByKey(key: string): string[];
    peekByKey(key: string): string;
    popByKey(key: string): string;
    pushByKey(key: string, value: string): void;
}
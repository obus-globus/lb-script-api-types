import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReEntranceLock extends Object {
    constructor(arg0: number)
    readonly depth: number;
    readonly maxDepth: number;
    // private semaphore: boolean;
    check(): boolean;
    checkAndSet(): boolean;
    clear(): ReEntranceLock;
    getDepth(): number;
    getMaxDepth(): number;
    isSet(): boolean;
    pop(): ReEntranceLock;
    push(): ReEntranceLock;
    set(): ReEntranceLock;
}
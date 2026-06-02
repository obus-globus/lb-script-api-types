import type { XZIOException } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/XZIOException.d.ts'
export class MemoryLimitException extends XZIOException {
    constructor(memoryNeeded: number, memoryLimit: number)
    readonly memoryLimit: number;
    readonly memoryNeeded: number;
    getMemoryLimit(): number;
    getMemoryNeeded(): number;
}
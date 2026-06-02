import type { Object } from '../../../java/lang/Object.d.ts'
export class NbtAccounter extends Object {
    static DEFAULT_NBT_QUOTA: number;
    static UNCOMPRESSED_NBT_QUOTA: number;
    static create(paramquota: number): NbtAccounter;
    static defaultQuota(): NbtAccounter;
    static uncompressedQuota(): NbtAccounter;
    static unlimitedHeap(): NbtAccounter;
    constructor(quota: number, maxDepth: number)
    readonly depth: number;
    // private maxDepth: number;
    // private quota: number;
    readonly usage: number;
    accountBytes(size: number): void;
    accountBytes(bytesPerEntry: number, count: number): void;
    getDepth(): number;
    getUsage(): number;
    popDepth(): void;
    pushDepth(): void;
}
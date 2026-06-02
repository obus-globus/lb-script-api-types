import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HeapSummary extends Object {
    constructor()
    constructor(summary: HeapSummary)
    aliveBytes: number;
    aliveInstances: number;
    totalBytes: number;
    totalInstances: number;
    add(summary: HeapSummary): void;
    getAliveBytes(): number;
    getAliveInstances(): number;
    getTotalBytes(): number;
    getTotalInstances(): number;
    toString(): string;
}
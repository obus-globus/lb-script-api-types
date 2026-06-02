import type { Object } from '../../../../java/lang/Object.d.ts'
export interface HeapDumpSupport extends Object{
    dumpHeap(outputFile: string, live: boolean): void;
    dumpHeap(outputFile: string, live: boolean, overwrite: boolean): void;
}
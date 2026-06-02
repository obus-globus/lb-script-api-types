import type { Object } from '../../../java/lang/Object.d.ts'
export class VMRuntime extends Object {
    static dumpHeap(paramoutputFile: string, paramlive: boolean): void;
    static initialize(): void;
    static shutdown(): void;
    private constructor()
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DebugCounter extends Object {
    static create(paramname: string): DebugCounter;
    static dumpCounters(): void;
    private constructor()
    get(): number;
    inc(): void;
}
import type { DebugCounter } from '../../../../../com/oracle/truffle/api/object/DebugCounter.d.ts'
export class DebugCounter$Dummy extends DebugCounter {
    static create(paramname: string): DebugCounter;
    static dumpCounters(): void;
    private constructor()
    get(): number;
    inc(): void;
}
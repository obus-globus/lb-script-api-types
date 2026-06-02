import type { DebugCounter } from '../../../../../../com/oracle/truffle/js/runtime/util/DebugCounter.d.ts'
export class DebugCounter$Dummy extends DebugCounter {
    static create(paramname: string): DebugCounter;
    static dumpCounters(): void;
    private constructor()
    get(): number;
    inc(): void;
}
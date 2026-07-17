import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$BytecodeHistogramGrouping extends Enum<PolyglotEngineOptions$BytecodeHistogramGrouping> {
    static language: PolyglotEngineOptions$BytecodeHistogramGrouping;
    static root: PolyglotEngineOptions$BytecodeHistogramGrouping;
    static source: PolyglotEngineOptions$BytecodeHistogramGrouping;
    static thread: PolyglotEngineOptions$BytecodeHistogramGrouping;
    static tier: PolyglotEngineOptions$BytecodeHistogramGrouping;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotEngineOptions$BytecodeHistogramGrouping;
    static values(): PolyglotEngineOptions$BytecodeHistogramGrouping[];
    private constructor()
    name(): "root" | "tier" | "source" | "language" | "thread";
}
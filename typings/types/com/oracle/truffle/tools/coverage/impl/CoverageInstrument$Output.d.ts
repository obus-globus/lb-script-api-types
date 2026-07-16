import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CoverageInstrument$Output extends Enum<CoverageInstrument$Output> {
    static DETAILED: CoverageInstrument$Output;
    static HISTOGRAM: CoverageInstrument$Output;
    static JSON: CoverageInstrument$Output;
    static LCOV: CoverageInstrument$Output;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CoverageInstrument$Output;
    static values(): CoverageInstrument$Output[];
    private constructor()
    toString(): string;
    name(): "HISTOGRAM" | "DETAILED" | "JSON" | "LCOV";
}
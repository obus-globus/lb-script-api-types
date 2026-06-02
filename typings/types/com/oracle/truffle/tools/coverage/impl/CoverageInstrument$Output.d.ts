import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CoverageInstrument$Output extends Enum<CoverageInstrument$Output> {
    static DETAILED: CoverageInstrument$Output;
    static HISTOGRAM: CoverageInstrument$Output;
    static JSON: CoverageInstrument$Output;
    static LCOV: CoverageInstrument$Output;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CoverageInstrument$Output;
    static values(): (Object | null)[];
    private constructor()
    toString(): string;
    name(): "HISTOGRAM" | "DETAILED" | "JSON" | "LCOV";
}
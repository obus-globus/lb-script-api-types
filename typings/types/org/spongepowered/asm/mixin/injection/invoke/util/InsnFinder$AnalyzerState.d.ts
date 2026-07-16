import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class InsnFinder$AnalyzerState extends Enum<InsnFinder$AnalyzerState> {
    static ANALYSE: InsnFinder$AnalyzerState;
    static COMPLETE: InsnFinder$AnalyzerState;
    static SEARCH: InsnFinder$AnalyzerState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InsnFinder$AnalyzerState;
    static values(): InsnFinder$AnalyzerState[];
    private constructor()
    name(): "SEARCH" | "ANALYSE" | "COMPLETE";
}
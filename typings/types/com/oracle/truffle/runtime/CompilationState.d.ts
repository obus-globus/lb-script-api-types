import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CompilationState extends Enum<CompilationState> {
    static FIRST_TIER_INLINED: CompilationState;
    static FIRST_TIER_ROOT: CompilationState;
    static INTERPRETED: CompilationState;
    static LAST_TIER_INLINED: CompilationState;
    static LAST_TIER_ROOT: CompilationState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CompilationState;
    static values(): CompilationState[];
    private constructor()
    getTier(): number;
    isCompilationRoot(): boolean;
    isCompiled(): boolean;
    name(): "INTERPRETED" | "FIRST_TIER_ROOT" | "LAST_TIER_ROOT" | "FIRST_TIER_INLINED" | "LAST_TIER_INLINED";
}
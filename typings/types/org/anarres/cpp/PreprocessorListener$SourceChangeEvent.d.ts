import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class PreprocessorListener$SourceChangeEvent extends Enum<PreprocessorListener$SourceChangeEvent> {
    static POP: PreprocessorListener$SourceChangeEvent;
    static PUSH: PreprocessorListener$SourceChangeEvent;
    static RESUME: PreprocessorListener$SourceChangeEvent;
    static SUSPEND: PreprocessorListener$SourceChangeEvent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PreprocessorListener$SourceChangeEvent;
    static values(): PreprocessorListener$SourceChangeEvent[];
    private constructor()
    name(): "SUSPEND" | "PUSH" | "POP" | "RESUME";
}
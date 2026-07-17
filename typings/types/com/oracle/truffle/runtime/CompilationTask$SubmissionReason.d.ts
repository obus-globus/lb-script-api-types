import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CompilationTask$SubmissionReason extends Enum<CompilationTask$SubmissionReason> {
    static EXPLICIT: CompilationTask$SubmissionReason;
    static HOTNESS: CompilationTask$SubmissionReason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CompilationTask$SubmissionReason;
    static values(): CompilationTask$SubmissionReason[];
    private constructor()
    canBecomeStale(): boolean;
    name(): "HOTNESS" | "EXPLICIT";
}
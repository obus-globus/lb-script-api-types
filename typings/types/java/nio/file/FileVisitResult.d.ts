import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FileVisitResult extends Enum<FileVisitResult> {
    static CONTINUE: FileVisitResult;
    static SKIP_SIBLINGS: FileVisitResult;
    static SKIP_SUBTREE: FileVisitResult;
    static TERMINATE: FileVisitResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FileVisitResult;
    static values(): FileVisitResult[];
    private constructor()
    name(): "CONTINUE" | "TERMINATE" | "SKIP_SUBTREE" | "SKIP_SIBLINGS";
}
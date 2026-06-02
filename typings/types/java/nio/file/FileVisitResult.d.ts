import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FileVisitResult extends Enum<FileVisitResult> {
    static CONTINUE: FileVisitResult;
    static SKIP_SIBLINGS: FileVisitResult;
    static SKIP_SUBTREE: FileVisitResult;
    static TERMINATE: FileVisitResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FileVisitResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "CONTINUE" | "TERMINATE" | "SKIP_SUBTREE" | "SKIP_SIBLINGS";
}
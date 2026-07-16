import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FileVisitOption extends Enum<FileVisitOption> {
    static FOLLOW_LINKS: FileVisitOption;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FileVisitOption;
    static values(): FileVisitOption[];
    private constructor()
    name(): "FOLLOW_LINKS";
}
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FileVisitOption extends Enum<FileVisitOption> {
    static FOLLOW_LINKS: FileVisitOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FileVisitOption;
    static values(): FileVisitOption[];
    private constructor()
    name(): "FOLLOW_LINKS";
}
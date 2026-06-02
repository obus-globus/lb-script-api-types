import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class PathWalkOption extends Enum<PathWalkOption> implements Serializable {
    static BREADTH_FIRST: PathWalkOption;
    static FOLLOW_LINKS: PathWalkOption;
    static INCLUDE_DIRECTORIES: PathWalkOption;
    static getEntries(): PathWalkOption[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PathWalkOption;
    static values(): (Object | null)[];
    private constructor()
    name(): "INCLUDE_DIRECTORIES" | "BREADTH_FIRST" | "FOLLOW_LINKS";
}
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class PathWalkOption extends Enum<PathWalkOption> implements Serializable {
    static BREADTH_FIRST: PathWalkOption;
    static FOLLOW_LINKS: PathWalkOption;
    static INCLUDE_DIRECTORIES: PathWalkOption;
    static getEntries(): PathWalkOption[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): PathWalkOption;
    static values(): PathWalkOption[];
    private constructor()
    name(): "INCLUDE_DIRECTORIES" | "BREADTH_FIRST" | "FOLLOW_LINKS";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PackLoadFeedback$Update extends Enum<PackLoadFeedback$Update> {
    static ACCEPTED: PackLoadFeedback$Update;
    static DOWNLOADED: PackLoadFeedback$Update;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PackLoadFeedback$Update;
    static values(): PackLoadFeedback$Update[];
    private constructor()
    name(): "ACCEPTED" | "DOWNLOADED";
}
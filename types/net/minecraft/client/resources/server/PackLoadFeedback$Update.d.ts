import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PackLoadFeedback$Update extends Enum<PackLoadFeedback$Update> {
    static ACCEPTED: PackLoadFeedback$Update;
    static DOWNLOADED: PackLoadFeedback$Update;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PackLoadFeedback$Update;
    static values(): (Object | null)[];
    private constructor()
    name(): "ACCEPTED" | "DOWNLOADED";
}
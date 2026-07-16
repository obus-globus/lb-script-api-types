import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class LocaleMatcher$FavorSubtag extends Enum<LocaleMatcher$FavorSubtag> {
    static LANGUAGE: LocaleMatcher$FavorSubtag;
    static SCRIPT: LocaleMatcher$FavorSubtag;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LocaleMatcher$FavorSubtag;
    static values(): LocaleMatcher$FavorSubtag[];
    private constructor()
    name(): "LANGUAGE" | "SCRIPT";
}
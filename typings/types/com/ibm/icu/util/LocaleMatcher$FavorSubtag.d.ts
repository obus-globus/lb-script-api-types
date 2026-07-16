import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LocaleMatcher$FavorSubtag extends Enum<LocaleMatcher$FavorSubtag> {
    static LANGUAGE: LocaleMatcher$FavorSubtag;
    static SCRIPT: LocaleMatcher$FavorSubtag;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LocaleMatcher$FavorSubtag;
    static values(): LocaleMatcher$FavorSubtag[];
    private constructor()
    name(): "LANGUAGE" | "SCRIPT";
}
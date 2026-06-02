import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DrawOutlinesEvent$OutlineType extends Enum<DrawOutlinesEvent$OutlineType> {
    static INBUILT_OUTLINE: DrawOutlinesEvent$OutlineType;
    static MINECRAFT_GLOW: DrawOutlinesEvent$OutlineType;
    static getEntries(): DrawOutlinesEvent$OutlineType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DrawOutlinesEvent$OutlineType;
    static values(): (Object | null)[];
    private constructor()
    name(): "INBUILT_OUTLINE" | "MINECRAFT_GLOW";
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModMenuConfig$GameMenuButtonStyle extends Enum<ModMenuConfig$GameMenuButtonStyle> {
    static ICON: ModMenuConfig$GameMenuButtonStyle;
    static INSERT: ModMenuConfig$GameMenuButtonStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModMenuConfig$GameMenuButtonStyle;
    static values(): (Object | null)[];
    private constructor()
    name(): "INSERT" | "ICON";
}
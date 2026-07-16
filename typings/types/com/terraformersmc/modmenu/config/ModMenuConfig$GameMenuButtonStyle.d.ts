import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModMenuConfig$GameMenuButtonStyle extends Enum<ModMenuConfig$GameMenuButtonStyle> {
    static ICON: ModMenuConfig$GameMenuButtonStyle;
    static INSERT: ModMenuConfig$GameMenuButtonStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModMenuConfig$GameMenuButtonStyle;
    static values(): ModMenuConfig$GameMenuButtonStyle[];
    private constructor()
    name(): "INSERT" | "ICON";
}
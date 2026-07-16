import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModMenuConfig$TitleMenuButtonStyle extends Enum<ModMenuConfig$TitleMenuButtonStyle> {
    static CLASSIC: ModMenuConfig$TitleMenuButtonStyle;
    static ICON: ModMenuConfig$TitleMenuButtonStyle;
    static REPLACE_REALMS: ModMenuConfig$TitleMenuButtonStyle;
    static SHRINK: ModMenuConfig$TitleMenuButtonStyle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModMenuConfig$TitleMenuButtonStyle;
    static values(): ModMenuConfig$TitleMenuButtonStyle[];
    private constructor()
    name(): "CLASSIC" | "REPLACE_REALMS" | "SHRINK" | "ICON";
}
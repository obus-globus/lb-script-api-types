import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModMenuConfig$ModCountLocation extends Enum<ModMenuConfig$ModCountLocation> {
    static MODS_BUTTON: ModMenuConfig$ModCountLocation;
    static NONE: ModMenuConfig$ModCountLocation;
    static TITLE_SCREEN: ModMenuConfig$ModCountLocation;
    static TITLE_SCREEN_AND_MODS_BUTTON: ModMenuConfig$ModCountLocation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModMenuConfig$ModCountLocation;
    static values(): (Object | null)[];
    private constructor(arg2: boolean, arg3: boolean)
    // private modsButton: boolean;
    // private titleScreen: boolean;
    isOnModsButton(): boolean;
    isOnTitleScreen(): boolean;
    name(): "TITLE_SCREEN" | "MODS_BUTTON" | "TITLE_SCREEN_AND_MODS_BUTTON" | "NONE";
}
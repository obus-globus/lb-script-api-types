import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GuiMessageSource extends Enum<GuiMessageSource> {
    static PLAYER: GuiMessageSource;
    static SYSTEM_CLIENT: GuiMessageSource;
    static SYSTEM_SERVER: GuiMessageSource;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GuiMessageSource;
    static values(): GuiMessageSource[];
    private constructor()
    name(): "PLAYER" | "SYSTEM_SERVER" | "SYSTEM_CLIENT";
}
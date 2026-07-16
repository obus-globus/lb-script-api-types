import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ModuleManager$SmartBindKeyboardState extends Enum<ModuleManager$SmartBindKeyboardState> {
    static HOLDING: ModuleManager$SmartBindKeyboardState;
    static PENDING_DISABLED: ModuleManager$SmartBindKeyboardState;
    static PENDING_ENABLED: ModuleManager$SmartBindKeyboardState;
    static getEntries(): ModuleManager$SmartBindKeyboardState[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleManager$SmartBindKeyboardState;
    static values(): ModuleManager$SmartBindKeyboardState[];
    private constructor()
    name(): "PENDING_ENABLED" | "PENDING_DISABLED" | "HOLDING";
}
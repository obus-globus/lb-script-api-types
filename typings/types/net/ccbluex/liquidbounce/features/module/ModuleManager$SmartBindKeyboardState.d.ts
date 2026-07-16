import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ModuleManager$SmartBindKeyboardState extends Enum<ModuleManager$SmartBindKeyboardState> {
    static HOLDING: ModuleManager$SmartBindKeyboardState;
    static PENDING_DISABLED: ModuleManager$SmartBindKeyboardState;
    static PENDING_ENABLED: ModuleManager$SmartBindKeyboardState;
    static getEntries(): ModuleManager$SmartBindKeyboardState[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleManager$SmartBindKeyboardState;
    static values(): ModuleManager$SmartBindKeyboardState[];
    private constructor()
    name(): "PENDING_ENABLED" | "PENDING_DISABLED" | "HOLDING";
}
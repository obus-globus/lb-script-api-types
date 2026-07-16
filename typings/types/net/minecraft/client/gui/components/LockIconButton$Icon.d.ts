import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class LockIconButton$Icon extends Enum<LockIconButton$Icon> {
    static LOCKED: LockIconButton$Icon;
    static LOCKED_DISABLED: LockIconButton$Icon;
    static LOCKED_HOVER: LockIconButton$Icon;
    static UNLOCKED: LockIconButton$Icon;
    static UNLOCKED_DISABLED: LockIconButton$Icon;
    static UNLOCKED_HOVER: LockIconButton$Icon;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LockIconButton$Icon;
    static values(): LockIconButton$Icon[];
    private constructor(sprite: Identifier)
    // private sprite: Identifier;
    name(): "LOCKED" | "LOCKED_HOVER" | "LOCKED_DISABLED" | "UNLOCKED" | "UNLOCKED_HOVER" | "UNLOCKED_DISABLED";
}
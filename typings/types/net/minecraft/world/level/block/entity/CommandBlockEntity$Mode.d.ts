import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CommandBlockEntity$Mode extends Enum<CommandBlockEntity$Mode> {
    static AUTO: CommandBlockEntity$Mode;
    static REDSTONE: CommandBlockEntity$Mode;
    static SEQUENCE: CommandBlockEntity$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CommandBlockEntity$Mode;
    static values(): CommandBlockEntity$Mode[];
    private constructor()
    name(): "SEQUENCE" | "AUTO" | "REDSTONE";
}
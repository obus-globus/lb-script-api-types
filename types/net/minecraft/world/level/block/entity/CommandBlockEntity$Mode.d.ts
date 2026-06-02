import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CommandBlockEntity$Mode extends Enum<CommandBlockEntity$Mode> {
    static AUTO: CommandBlockEntity$Mode;
    static REDSTONE: CommandBlockEntity$Mode;
    static SEQUENCE: CommandBlockEntity$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CommandBlockEntity$Mode;
    static values(): (Object | null)[];
    private constructor()
    name(): "SEQUENCE" | "AUTO" | "REDSTONE";
}
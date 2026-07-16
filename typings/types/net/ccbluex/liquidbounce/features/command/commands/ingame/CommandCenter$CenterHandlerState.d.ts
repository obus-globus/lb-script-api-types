import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CommandCenter$CenterHandlerState extends Enum<CommandCenter$CenterHandlerState> {
    static APPLY_ON_NEXT_EVENT: CommandCenter$CenterHandlerState;
    static INACTIVE: CommandCenter$CenterHandlerState;
    static getEntries(): CommandCenter$CenterHandlerState[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CommandCenter$CenterHandlerState;
    static values(): CommandCenter$CenterHandlerState[];
    private constructor()
    name(): "INACTIVE" | "APPLY_ON_NEXT_EVENT";
}
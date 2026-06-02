import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MessagePattern$ApostropheMode extends Enum<MessagePattern$ApostropheMode> {
    static DOUBLE_OPTIONAL: MessagePattern$ApostropheMode;
    static DOUBLE_REQUIRED: MessagePattern$ApostropheMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MessagePattern$ApostropheMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "DOUBLE_OPTIONAL" | "DOUBLE_REQUIRED";
}
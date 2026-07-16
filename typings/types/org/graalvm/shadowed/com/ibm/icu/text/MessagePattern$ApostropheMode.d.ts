import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MessagePattern$ApostropheMode extends Enum<MessagePattern$ApostropheMode> {
    static DOUBLE_OPTIONAL: MessagePattern$ApostropheMode;
    static DOUBLE_REQUIRED: MessagePattern$ApostropheMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MessagePattern$ApostropheMode;
    static values(): MessagePattern$ApostropheMode[];
    private constructor()
    name(): "DOUBLE_OPTIONAL" | "DOUBLE_REQUIRED";
}
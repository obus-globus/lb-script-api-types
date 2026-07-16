import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CustomChatCompletionsAction extends Enum<CustomChatCompletionsAction> {
    static ADD: CustomChatCompletionsAction;
    static REMOVE: CustomChatCompletionsAction;
    static SET: CustomChatCompletionsAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CustomChatCompletionsAction;
    static values(): CustomChatCompletionsAction[];
    private constructor()
    name(): "ADD" | "REMOVE" | "SET";
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ChatToggleValue extends Enum<ChatToggleValue> {
    static DISABLED: ChatToggleValue;
    static ENABLED: ChatToggleValue;
    static FRIENDS_ONLY: ChatToggleValue;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ChatToggleValue;
    static values(): ChatToggleValue[];
    private constructor()
    isDisabled(): boolean;
    isEnabled(): boolean;
    isFriendsOnly(): boolean;
    name(): "DISABLED" | "FRIENDS_ONLY" | "ENABLED";
}
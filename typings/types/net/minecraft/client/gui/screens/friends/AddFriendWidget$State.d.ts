import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AddFriendWidget$State extends Enum<AddFriendWidget$State> {
    static DISABLED: AddFriendWidget$State;
    static EMPTY_INPUT: AddFriendWidget$State;
    static READY: AddFriendWidget$State;
    static SENDING: AddFriendWidget$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AddFriendWidget$State;
    static values(): AddFriendWidget$State[];
    private constructor()
    name(): "EMPTY_INPUT" | "READY" | "SENDING" | "DISABLED";
}
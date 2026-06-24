import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AddFriendWidget$State extends Enum<AddFriendWidget$State> {
    static DISABLED: AddFriendWidget$State;
    static EMPTY_INPUT: AddFriendWidget$State;
    static READY: AddFriendWidget$State;
    static SENDING: AddFriendWidget$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AddFriendWidget$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "EMPTY_INPUT" | "READY" | "SENDING" | "DISABLED";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class State extends Enum<State> {
    static CONFIGURATION: State;
    static HANDSHAKE: State;
    static LOGIN: State;
    static PLAY: State;
    static STATUS: State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): State;
    static values(): State[];
    private constructor()
    name(): "HANDSHAKE" | "STATUS" | "LOGIN" | "CONFIGURATION" | "PLAY";
}
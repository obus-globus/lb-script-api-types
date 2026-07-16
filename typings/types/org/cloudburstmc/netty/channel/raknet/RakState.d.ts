import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RakState extends Enum<RakState> {
    static CONNECTED: RakState;
    static DISCONNECTED: RakState;
    static DISCONNECTING: RakState;
    static UNCONNECTED: RakState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RakState;
    static values(): RakState[];
    private constructor()
    name(): "UNCONNECTED" | "CONNECTED" | "DISCONNECTING" | "DISCONNECTED";
}
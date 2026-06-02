import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RakState extends Enum<RakState> {
    static CONNECTED: RakState;
    static DISCONNECTED: RakState;
    static DISCONNECTING: RakState;
    static UNCONNECTED: RakState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RakState;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNCONNECTED" | "CONNECTED" | "DISCONNECTING" | "DISCONNECTED";
}
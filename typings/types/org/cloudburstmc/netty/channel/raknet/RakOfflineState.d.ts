import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RakOfflineState extends Enum<RakOfflineState> {
    static HANDSHAKE_1: RakOfflineState;
    static HANDSHAKE_2: RakOfflineState;
    static HANDSHAKE_COMPLETED: RakOfflineState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RakOfflineState;
    static values(): RakOfflineState[];
    private constructor()
    name(): "HANDSHAKE_1" | "HANDSHAKE_2" | "HANDSHAKE_COMPLETED";
}
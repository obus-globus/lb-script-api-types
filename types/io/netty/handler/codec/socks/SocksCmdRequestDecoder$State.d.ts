import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksCmdRequestDecoder$State extends Enum<SocksCmdRequestDecoder$State> {
    static CHECK_PROTOCOL_VERSION: SocksCmdRequestDecoder$State;
    static READ_CMD_ADDRESS: SocksCmdRequestDecoder$State;
    static READ_CMD_HEADER: SocksCmdRequestDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SocksCmdRequestDecoder$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "CHECK_PROTOCOL_VERSION" | "READ_CMD_HEADER" | "READ_CMD_ADDRESS";
}
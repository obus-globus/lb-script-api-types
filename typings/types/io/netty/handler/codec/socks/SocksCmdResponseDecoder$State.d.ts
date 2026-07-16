import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SocksCmdResponseDecoder$State extends Enum<SocksCmdResponseDecoder$State> {
    static CHECK_PROTOCOL_VERSION: SocksCmdResponseDecoder$State;
    static READ_CMD_ADDRESS: SocksCmdResponseDecoder$State;
    static READ_CMD_HEADER: SocksCmdResponseDecoder$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SocksCmdResponseDecoder$State;
    static values(): SocksCmdResponseDecoder$State[];
    private constructor()
    name(): "CHECK_PROTOCOL_VERSION" | "READ_CMD_HEADER" | "READ_CMD_ADDRESS";
}
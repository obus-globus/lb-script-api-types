import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SocketProtocolFamily extends Enum<SocketProtocolFamily> implements ProtocolFamily {
    static INET: SocketProtocolFamily;
    static INET6: SocketProtocolFamily;
    static UNIX: SocketProtocolFamily;
    static of(paramarg0: ProtocolFamily): SocketProtocolFamily;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SocketProtocolFamily;
    static values(): (Object | null)[];
    private constructor()
    toJdkFamily(): ProtocolFamily;
    name(): "INET" | "INET6" | "UNIX";
}
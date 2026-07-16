import type { SocketProtocolFamily } from '../../../../io/netty/channel/socket/SocketProtocolFamily.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class InternetProtocolFamily extends Enum<InternetProtocolFamily> {
    static IPv4: InternetProtocolFamily;
    static IPv6: InternetProtocolFamily;
    static of(paramarg0: InetAddress): InternetProtocolFamily;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InternetProtocolFamily;
    static values(): InternetProtocolFamily[];
    private constructor(arg2: Class<InetAddress>, arg3: number)
    // private addressNumber: number;
    // private addressType: Class<InetAddress>;
    addressNumber(): number;
    addressType(): Class<InetAddress>;
    localhost(): InetAddress;
    toSocketProtocolFamily(): SocketProtocolFamily;
    name(): "IPv4" | "IPv6";
}
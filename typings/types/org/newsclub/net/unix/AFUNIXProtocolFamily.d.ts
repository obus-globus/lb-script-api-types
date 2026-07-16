import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { AFDatagramChannel } from '../../../../org/newsclub/net/unix/AFDatagramChannel.d.ts'
import type { AFProtocolFamily } from '../../../../org/newsclub/net/unix/AFProtocolFamily.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
export class AFUNIXProtocolFamily extends Enum<AFUNIXProtocolFamily> implements AFProtocolFamily {
    static UNIX: AFUNIXProtocolFamily;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AFUNIXProtocolFamily;
    static values(): AFUNIXProtocolFamily[];
    private constructor()
    name(): string;
    openDatagramChannel(): AFDatagramChannel<any>;
    openServerSocketChannel(): AFServerSocketChannel<any>;
    openSocketChannel(): AFSocketChannel<any>;
    name(): "UNIX";
}
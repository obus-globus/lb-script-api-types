import type { ProtocolFamily } from '../../../../java/net/ProtocolFamily.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFDatagramChannel } from '../../../../org/newsclub/net/unix/AFDatagramChannel.d.ts'
import type { AFServerSocketChannel } from '../../../../org/newsclub/net/unix/AFServerSocketChannel.d.ts'
import type { AFSocketChannel } from '../../../../org/newsclub/net/unix/AFSocketChannel.d.ts'
export interface AFProtocolFamily extends ProtocolFamily, Object{
    name(): string;
    openDatagramChannel(): AFDatagramChannel<Object>;
    openServerSocketChannel(): AFServerSocketChannel<Object>;
    openSocketChannel(): AFSocketChannel<Object>;
}
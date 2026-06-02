import type { FileDescriptor } from '../../../../java/io/FileDescriptor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFDatagramSocket } from '../../../../org/newsclub/net/unix/AFDatagramSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
export interface AFDatagramSocket$Constructor<A extends AFSocketAddress> extends Object{
    newSocket(arg0: FileDescriptor): AFDatagramSocket<A>;
}
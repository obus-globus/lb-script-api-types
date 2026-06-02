import type { Ddeml$HCONVLIST } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONVLIST.d.ts'
import type { DdemlUtil$IDdeConnection } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeConnection.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DdemlUtil$IDdeConnectionList extends Closeable, Object{
    close(): void;
    getHandle(): Ddeml$HCONVLIST;
    queryNextServer(arg0: DdemlUtil$IDdeConnection): DdemlUtil$IDdeConnection;
}
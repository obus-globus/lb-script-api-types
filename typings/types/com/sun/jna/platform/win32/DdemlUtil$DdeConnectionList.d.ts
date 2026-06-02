import type { Ddeml$HCONVLIST } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONVLIST.d.ts'
import type { DdemlUtil$IDdeClient } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeClient.d.ts'
import type { DdemlUtil$IDdeConnection } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeConnection.d.ts'
import type { DdemlUtil$IDdeConnectionList } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeConnectionList.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DdemlUtil$DdeConnectionList extends Object implements DdemlUtil$IDdeConnectionList {
    constructor(arg0: DdemlUtil$IDdeClient, arg1: Ddeml$HCONVLIST)
    // private client: DdemlUtil$IDdeClient;
    // private convList: Ddeml$HCONVLIST;
    close(): void;
    getHandle(): Ddeml$HCONVLIST;
    queryNextServer(arg0: DdemlUtil$IDdeConnection): DdemlUtil$IDdeConnection;
}
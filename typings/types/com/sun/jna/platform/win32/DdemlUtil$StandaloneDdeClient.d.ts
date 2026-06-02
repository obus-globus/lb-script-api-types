import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Ddeml$CONVCONTEXT } from '../../../../../com/sun/jna/platform/win32/Ddeml$CONVCONTEXT.d.ts'
import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Ddeml$HDDEDATA } from '../../../../../com/sun/jna/platform/win32/Ddeml$HDDEDATA.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { DdemlUtil$AdvdataHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvdataHandler.d.ts'
import type { DdemlUtil$AdvreqHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvreqHandler.d.ts'
import type { DdemlUtil$AdvstartHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvstartHandler.d.ts'
import type { DdemlUtil$AdvstopHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvstopHandler.d.ts'
import type { DdemlUtil$ConnectConfirmHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ConnectConfirmHandler.d.ts'
import type { DdemlUtil$ConnectHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ConnectHandler.d.ts'
import type { DdemlUtil$DisconnectHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$DisconnectHandler.d.ts'
import type { DdemlUtil$ErrorHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ErrorHandler.d.ts'
import type { DdemlUtil$ExecuteHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ExecuteHandler.d.ts'
import type { DdemlUtil$IDdeClient } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeClient.d.ts'
import type { DdemlUtil$IDdeConnection } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeConnection.d.ts'
import type { DdemlUtil$IDdeConnectionList } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$IDdeConnectionList.d.ts'
import type { DdemlUtil$MonitorHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$MonitorHandler.d.ts'
import type { DdemlUtil$PokeHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$PokeHandler.d.ts'
import type { DdemlUtil$RegisterHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$RegisterHandler.d.ts'
import type { DdemlUtil$RequestHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$RequestHandler.d.ts'
import type { DdemlUtil$UnregisterHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$UnregisterHandler.d.ts'
import type { DdemlUtil$WildconnectHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$WildconnectHandler.d.ts'
import type { DdemlUtil$XactCompleteHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$XactCompleteHandler.d.ts'
import type { User32Util$MessageLoopThread } from '../../../../../com/sun/jna/platform/win32/User32Util$MessageLoopThread.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DdemlUtil$StandaloneDdeClient extends Object implements DdemlUtil$IDdeClient, Closeable {
    constructor()
    // private clientDelegate: DdemlUtil$IDdeClient;
    // private ddeClient: DdemlUtil$IDdeClient;
    // private messageLoop: User32Util$MessageLoopThread;
    abandonTransactions(): void;
    accessData(arg0: Ddeml$HDDEDATA, arg1: WinDef$DWORDByReference): Pointer;
    addData(arg0: Ddeml$HDDEDATA, arg1: Pointer, arg2: number, arg3: number): Ddeml$HDDEDATA;
    close(): void;
    connect(arg0: Ddeml$HSZ, arg1: Ddeml$HSZ, arg2: Ddeml$CONVCONTEXT): DdemlUtil$IDdeConnection;
    connect(arg0: string, arg1: string, arg2: Ddeml$CONVCONTEXT): DdemlUtil$IDdeConnection;
    connectList(arg0: Ddeml$HSZ, arg1: Ddeml$HSZ, arg2: DdemlUtil$IDdeConnectionList, arg3: Ddeml$CONVCONTEXT): DdemlUtil$IDdeConnectionList;
    connectList(arg0: string, arg1: string, arg2: DdemlUtil$IDdeConnectionList, arg3: Ddeml$CONVCONTEXT): DdemlUtil$IDdeConnectionList;
    createDataHandle(arg0: Pointer, arg1: number, arg2: number, arg3: Ddeml$HSZ, arg4: number, arg5: number): Ddeml$HDDEDATA;
    createStringHandle(arg0: string): Ddeml$HSZ;
    enableCallback(arg0: number): boolean;
    freeDataHandle(arg0: Ddeml$HDDEDATA): void;
    freeStringHandle(arg0: Ddeml$HSZ): boolean;
    getData(arg0: Ddeml$HDDEDATA, arg1: Pointer, arg2: number, arg3: number): number;
    getInstanceIdentitifier(): number;
    getLastError(): number;
    initialize(arg0: number): void;
    keepStringHandle(arg0: Ddeml$HSZ): boolean;
    nameService(arg0: Ddeml$HSZ, arg1: number): void;
    nameService(arg0: string, arg1: number): void;
    postAdvise(arg0: Ddeml$HSZ, arg1: Ddeml$HSZ): void;
    postAdvise(arg0: string, arg1: string): void;
    queryString(arg0: Ddeml$HSZ): string;
    registerAdvReqHandler(arg0: DdemlUtil$AdvreqHandler): void;
    registerAdvdataHandler(arg0: DdemlUtil$AdvdataHandler): void;
    registerAdvstartHandler(arg0: DdemlUtil$AdvstartHandler): void;
    registerAdvstopHandler(arg0: DdemlUtil$AdvstopHandler): void;
    registerConnectConfirmHandler(arg0: DdemlUtil$ConnectConfirmHandler): void;
    registerConnectHandler(arg0: DdemlUtil$ConnectHandler): void;
    registerDisconnectHandler(arg0: DdemlUtil$DisconnectHandler): void;
    registerErrorHandler(arg0: DdemlUtil$ErrorHandler): void;
    registerExecuteHandler(arg0: DdemlUtil$ExecuteHandler): void;
    registerMonitorHandler(arg0: DdemlUtil$MonitorHandler): void;
    registerPokeHandler(arg0: DdemlUtil$PokeHandler): void;
    registerRegisterHandler(arg0: DdemlUtil$RegisterHandler): void;
    registerRequestHandler(arg0: DdemlUtil$RequestHandler): void;
    registerUnregisterHandler(arg0: DdemlUtil$UnregisterHandler): void;
    registerWildconnectHandler(arg0: DdemlUtil$WildconnectHandler): void;
    registerXactCompleteHandler(arg0: DdemlUtil$XactCompleteHandler): void;
    unaccessData(arg0: Ddeml$HDDEDATA): void;
    uninitialize(): boolean;
    unregisterAdvReqHandler(arg0: DdemlUtil$AdvreqHandler): void;
    unregisterAdvdataHandler(arg0: DdemlUtil$AdvdataHandler): void;
    unregisterAdvstartHandler(arg0: DdemlUtil$AdvstartHandler): void;
    unregisterAdvstopHandler(arg0: DdemlUtil$AdvstopHandler): void;
    unregisterConnectConfirmHandler(arg0: DdemlUtil$ConnectConfirmHandler): void;
    unregisterConnectHandler(arg0: DdemlUtil$ConnectHandler): void;
    unregisterDisconnectHandler(arg0: DdemlUtil$DisconnectHandler): void;
    unregisterErrorHandler(arg0: DdemlUtil$ErrorHandler): void;
    unregisterExecuteHandler(arg0: DdemlUtil$ExecuteHandler): void;
    unregisterMonitorHandler(arg0: DdemlUtil$MonitorHandler): void;
    unregisterPokeHandler(arg0: DdemlUtil$PokeHandler): void;
    unregisterRegisterHandler(arg0: DdemlUtil$RegisterHandler): void;
    unregisterRequestHandler(arg0: DdemlUtil$RequestHandler): void;
    unregisterUnregisterHandler(arg0: DdemlUtil$UnregisterHandler): void;
    unregisterWildconnectHandler(arg0: DdemlUtil$WildconnectHandler): void;
    unregisterXactCompleteHandler(arg0: DdemlUtil$XactCompleteHandler): void;
    wrap(arg0: Ddeml$HCONV): DdemlUtil$IDdeConnection;
}
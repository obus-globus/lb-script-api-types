import type { BaseTSD$ULONG_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$ULONG_PTR.d.ts'
import type { Ddeml$CONVCONTEXT } from '../../../../../com/sun/jna/platform/win32/Ddeml$CONVCONTEXT.d.ts'
import type { Ddeml$DdeCallback } from '../../../../../com/sun/jna/platform/win32/Ddeml$DdeCallback.d.ts'
import type { Ddeml$HCONV } from '../../../../../com/sun/jna/platform/win32/Ddeml$HCONV.d.ts'
import type { Ddeml$HDDEDATA } from '../../../../../com/sun/jna/platform/win32/Ddeml$HDDEDATA.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { Ddeml$HSZPAIR } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZPAIR.d.ts'
import type { DdemlUtil$AdvdataHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvdataHandler.d.ts'
import type { DdemlUtil$AdvreqHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvreqHandler.d.ts'
import type { DdemlUtil$AdvstartHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvstartHandler.d.ts'
import type { DdemlUtil$AdvstopHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$AdvstopHandler.d.ts'
import type { DdemlUtil$ConnectConfirmHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ConnectConfirmHandler.d.ts'
import type { DdemlUtil$ConnectHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ConnectHandler.d.ts'
import type { DdemlUtil$DisconnectHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$DisconnectHandler.d.ts'
import type { DdemlUtil$ErrorHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ErrorHandler.d.ts'
import type { DdemlUtil$ExecuteHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$ExecuteHandler.d.ts'
import type { DdemlUtil$MonitorHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$MonitorHandler.d.ts'
import type { DdemlUtil$PokeHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$PokeHandler.d.ts'
import type { DdemlUtil$RegisterHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$RegisterHandler.d.ts'
import type { DdemlUtil$RequestHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$RequestHandler.d.ts'
import type { DdemlUtil$UnregisterHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$UnregisterHandler.d.ts'
import type { DdemlUtil$WildconnectHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$WildconnectHandler.d.ts'
import type { DdemlUtil$XactCompleteHandler } from '../../../../../com/sun/jna/platform/win32/DdemlUtil$XactCompleteHandler.d.ts'
import type { WinDef$PVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DdemlUtil$DdeAdapter extends Object implements Ddeml$DdeCallback {
    static FORBIDDEN_NAMES: string[];
    static METHOD_NAME: string;
    constructor()
    // private advReqHandler: DdemlUtil$AdvreqHandler[];
    // private advdataHandler: DdemlUtil$AdvdataHandler[];
    // private advstartHandler: DdemlUtil$AdvstartHandler[];
    // private advstopHandler: DdemlUtil$AdvstopHandler[];
    // private connectConfirmHandler: DdemlUtil$ConnectConfirmHandler[];
    // private connectHandler: DdemlUtil$ConnectHandler[];
    // private disconnectHandler: DdemlUtil$DisconnectHandler[];
    // private errorHandler: DdemlUtil$ErrorHandler[];
    // private executeHandler: DdemlUtil$ExecuteHandler[];
    // private idInst: number;
    // private monitorHandler: DdemlUtil$MonitorHandler[];
    // private pokeHandler: DdemlUtil$PokeHandler[];
    // private registerHandler: DdemlUtil$RegisterHandler[];
    // private requestHandler: DdemlUtil$RequestHandler[];
    // private unregisterHandler: DdemlUtil$UnregisterHandler[];
    // private wildconnectHandler: DdemlUtil$WildconnectHandler[];
    // private xactCompleteHandler: DdemlUtil$XactCompleteHandler[];
    ddeCallback(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ, arg5: Ddeml$HDDEDATA, arg6: BaseTSD$ULONG_PTR, arg7: BaseTSD$ULONG_PTR): WinDef$PVOID;
    // private onAdvdata(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ, arg5: Ddeml$HDDEDATA): number;
    // private onAdvreq(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ, arg5: number): Ddeml$HDDEDATA;
    // private onAdvstart(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ): boolean;
    // private onAdvstop(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ): void;
    // private onConnect(arg0: number, arg1: Ddeml$HSZ, arg2: Ddeml$HSZ, arg3: Ddeml$CONVCONTEXT, arg4: boolean): boolean;
    // private onConnectConfirm(arg0: number, arg1: Ddeml$HCONV, arg2: Ddeml$HSZ, arg3: Ddeml$HSZ, arg4: boolean): void;
    // private onDisconnect(arg0: number, arg1: Ddeml$HCONV, arg2: boolean): void;
    // private onError(arg0: number, arg1: Ddeml$HCONV, arg2: number): void;
    // private onExecute(arg0: number, arg1: Ddeml$HCONV, arg2: Ddeml$HSZ, arg3: Ddeml$HDDEDATA): number;
    // private onMonitor(arg0: number, arg1: Ddeml$HDDEDATA, arg2: number): void;
    // private onPoke(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ, arg5: Ddeml$HDDEDATA): number;
    // private onRegister(arg0: number, arg1: Ddeml$HSZ, arg2: Ddeml$HSZ): void;
    // private onRequest(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ): Ddeml$HDDEDATA;
    // private onUnregister(arg0: number, arg1: Ddeml$HSZ, arg2: Ddeml$HSZ): void;
    // private onWildconnect(arg0: number, arg1: Ddeml$HSZ, arg2: Ddeml$HSZ, arg3: Ddeml$CONVCONTEXT, arg4: boolean): Ddeml$HSZPAIR[];
    // private onXactComplete(arg0: number, arg1: number, arg2: Ddeml$HCONV, arg3: Ddeml$HSZ, arg4: Ddeml$HSZ, arg5: Ddeml$HDDEDATA, arg6: BaseTSD$ULONG_PTR, arg7: BaseTSD$ULONG_PTR): void;
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
    setInstanceIdentifier(arg0: number): void;
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
    xactCompleteXactCompleteHandler(arg0: DdemlUtil$XactCompleteHandler): void;
}
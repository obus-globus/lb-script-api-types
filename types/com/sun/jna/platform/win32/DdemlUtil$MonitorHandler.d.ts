import type { Ddeml$HDDEDATA } from '../../../../../com/sun/jna/platform/win32/Ddeml$HDDEDATA.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DdemlUtil$MonitorHandler extends Object{
    onMonitor(arg0: number, arg1: Ddeml$HDDEDATA, arg2: number): void;
}
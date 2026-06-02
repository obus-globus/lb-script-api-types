import type { Ddeml$CONVCONTEXT } from '../../../../../com/sun/jna/platform/win32/Ddeml$CONVCONTEXT.d.ts'
import type { Ddeml$HSZ } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZ.d.ts'
import type { Ddeml$HSZPAIR } from '../../../../../com/sun/jna/platform/win32/Ddeml$HSZPAIR.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DdemlUtil$WildconnectHandler extends Object{
    onWildconnect(arg0: number, arg1: Ddeml$HSZ, arg2: Ddeml$HSZ, arg3: Ddeml$CONVCONTEXT, arg4: boolean): Ddeml$HSZPAIR[];
}
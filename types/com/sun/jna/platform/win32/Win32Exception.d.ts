import type { LastErrorException } from '../../../../../com/sun/jna/LastErrorException.d.ts'
import type { WinNT$HRESULT } from '../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Win32Exception extends LastErrorException {
    constructor(arg0: WinNT$HRESULT)
    constructor(arg0: number)
    constructor(arg0: number, arg1: WinNT$HRESULT)
    constructor(arg0: number, arg1: WinNT$HRESULT, arg2: string)
    // private _hr: WinNT$HRESULT;
    addSuppressedReflected(arg0: Throwable): void;
    getHR(): WinNT$HRESULT;
}
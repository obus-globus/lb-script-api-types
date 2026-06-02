import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class COMException extends RuntimeException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: WinNT$HRESULT)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    readonly hresult: WinNT$HRESULT;
    getHresult(): WinNT$HRESULT;
    matchesErrorCode(arg0: number): boolean;
}
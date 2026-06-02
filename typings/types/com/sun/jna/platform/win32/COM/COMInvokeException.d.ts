import type { COMException } from '../../../../../../com/sun/jna/platform/win32/COM/COMException.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class COMInvokeException extends COMException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: WinNT$HRESULT, arg2: number, arg3: string, arg4: number, arg5: string, arg6: number, arg7: string, arg8: number)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    readonly description: string;
    readonly errorArg: number;
    readonly helpContext: number;
    readonly helpFile: string;
    readonly scode: number;
    readonly source: string;
    // private wCode: number;
    getDescription(): string;
    getErrorArg(): number;
    getHelpContext(): number;
    getHelpFile(): string;
    getScode(): number;
    getSource(): string;
    getWCode(): number;
}
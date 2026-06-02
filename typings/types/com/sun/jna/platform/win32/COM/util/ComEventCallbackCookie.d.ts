import type { IComEventCallbackCookie } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackCookie.d.ts'
import type { WinDef$DWORD } from '../../../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ComEventCallbackCookie extends Object implements IComEventCallbackCookie {
    constructor(arg0: WinDef$DWORD)
    value: WinDef$DWORD;
    getValue(): WinDef$DWORD;
}
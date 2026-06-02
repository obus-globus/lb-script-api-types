import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
export class WinDef$HKL extends WinNT$HANDLE {
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: number)
    getDeviceHandle(): number;
    getLanguageIdentifier(): number;
    toString(): string;
}
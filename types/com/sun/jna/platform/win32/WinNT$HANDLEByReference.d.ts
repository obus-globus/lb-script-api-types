import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class WinNT$HANDLEByReference extends ByReference {
    constructor()
    constructor(arg0: WinNT$HANDLE)
    getValue(): WinNT$HANDLE;
    setValue(arg0: WinNT$HANDLE): void;
}
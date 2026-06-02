import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { COMInvoker } from '../../../../../../com/sun/jna/platform/win32/COM/COMInvoker.d.ts'
import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class Unknown extends COMInvoker implements IUnknown {
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
    AddRef(): number;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
}
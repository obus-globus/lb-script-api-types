import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IConnectionPointContainer } from '../../../../../../com/sun/jna/platform/win32/COM/IConnectionPointContainer.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class ConnectionPointContainer extends Unknown implements IConnectionPointContainer {
    static IID_IConnectionPointContainer: Guid$IID;
    static IID_IUNKNOWN: Guid$IID;
    constructor(arg0: Pointer)
    EnumConnectionPoints(): WinNT$HRESULT;
    FindConnectionPoint(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
}
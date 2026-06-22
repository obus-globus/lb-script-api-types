import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IUnknownCallback extends IUnknown, Object{
    AddRef(): number;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    getPointer(): Pointer;
}
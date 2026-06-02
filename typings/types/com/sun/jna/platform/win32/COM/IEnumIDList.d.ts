import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IEnumIDList extends Object{
    AddRef(): number;
    Clone(arg0: PointerByReference): WinNT$HRESULT;
    Next(arg0: number, arg1: PointerByReference, arg2: IntByReference): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    Reset(): WinNT$HRESULT;
    Skip(arg0: number): WinNT$HRESULT;
}
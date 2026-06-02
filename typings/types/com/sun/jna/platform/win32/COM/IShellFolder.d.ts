import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { ShTypes$STRRET } from '../../../../../../com/sun/jna/platform/win32/ShTypes$STRRET.d.ts'
import type { WinDef$HWND } from '../../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinDef$LPARAM } from '../../../../../../com/sun/jna/platform/win32/WinDef$LPARAM.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IShellFolder extends Object{
    AddRef(): number;
    BindToObject(arg0: Pointer, arg1: Pointer, arg2: Guid$REFIID, arg3: PointerByReference): WinNT$HRESULT;
    BindToStorage(arg0: Pointer, arg1: Pointer, arg2: Guid$REFIID, arg3: PointerByReference): WinNT$HRESULT;
    CompareIDs(arg0: WinDef$LPARAM, arg1: Pointer, arg2: Pointer): WinNT$HRESULT;
    CreateViewObject(arg0: WinDef$HWND, arg1: Guid$REFIID, arg2: PointerByReference): WinNT$HRESULT;
    EnumObjects(arg0: WinDef$HWND, arg1: number, arg2: PointerByReference): WinNT$HRESULT;
    GetAttributesOf(arg0: number, arg1: Pointer, arg2: IntByReference): WinNT$HRESULT;
    GetDisplayNameOf(arg0: Pointer, arg1: number, arg2: ShTypes$STRRET): WinNT$HRESULT;
    GetUIObjectOf(arg0: WinDef$HWND, arg1: number, arg2: Pointer, arg3: Guid$REFIID, arg4: IntByReference, arg5: PointerByReference): WinNT$HRESULT;
    ParseDisplayName(arg0: WinDef$HWND, arg1: Pointer, arg2: string, arg3: IntByReference, arg4: PointerByReference, arg5: IntByReference): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    SetNameOf(arg0: WinDef$HWND, arg1: Pointer, arg2: string, arg3: number, arg4: PointerByReference): WinNT$HRESULT;
}
import type { IPersist } from '../../../../../../com/sun/jna/platform/win32/COM/IPersist.d.ts'
import type { IStream } from '../../../../../../com/sun/jna/platform/win32/COM/IStream.d.ts'
import type { Guid$CLSID } from '../../../../../../com/sun/jna/platform/win32/Guid$CLSID.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IPersistStream extends IPersist, Object{
    AddRef(): number;
    GetClassID(): Guid$CLSID;
    GetSizeMax(): void;
    IsDirty(): boolean;
    Load(arg0: IStream): void;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    Save(arg0: IStream): void;
}
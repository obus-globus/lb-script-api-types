import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IPersistStream } from '../../../../../../com/sun/jna/platform/win32/COM/IPersistStream.d.ts'
import type { IStream } from '../../../../../../com/sun/jna/platform/win32/COM/IStream.d.ts'
import type { Guid$CLSID } from '../../../../../../com/sun/jna/platform/win32/Guid$CLSID.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IMoniker extends IPersistStream, Object{
    AddRef(): number;
    BindToObject(): void;
    BindToStorage(): void;
    CommonPrefixWith(): void;
    ComposeWith(): void;
    Enum(): void;
    GetClassID(): Guid$CLSID;
    GetDisplayName(arg0: Pointer, arg1: Pointer): string;
    GetSizeMax(): void;
    GetTimeOfLastChange(): void;
    Hash(): void;
    Inverse(): void;
    IsDirty(): boolean;
    IsEqual(): void;
    IsRunning(): void;
    IsSystemMoniker(): void;
    Load(arg0: IStream): void;
    ParseDisplayName(): void;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Reduce(): void;
    RelativePathTo(): void;
    Release(): number;
    Save(arg0: IStream): void;
}
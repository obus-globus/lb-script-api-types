import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IMoniker } from '../../../../../../com/sun/jna/platform/win32/COM/IMoniker.d.ts'
import type { IStream } from '../../../../../../com/sun/jna/platform/win32/COM/IStream.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$CLSID } from '../../../../../../com/sun/jna/platform/win32/Guid$CLSID.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
export class Moniker extends Unknown implements IMoniker {
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
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
    Reduce(): void;
    RelativePathTo(): void;
    Save(arg0: IStream): void;
}
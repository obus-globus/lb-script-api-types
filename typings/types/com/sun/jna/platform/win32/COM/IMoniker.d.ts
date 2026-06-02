import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IPersistStream } from '../../../../../../com/sun/jna/platform/win32/COM/IPersistStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IMoniker extends IPersistStream, Object{
    BindToObject(): void;
    BindToStorage(): void;
    CommonPrefixWith(): void;
    ComposeWith(): void;
    Enum(): void;
    GetDisplayName(arg0: Pointer, arg1: Pointer): string;
    GetTimeOfLastChange(): void;
    Hash(): void;
    Inverse(): void;
    IsEqual(): void;
    IsRunning(): void;
    IsSystemMoniker(): void;
    ParseDisplayName(): void;
    Reduce(): void;
    RelativePathTo(): void;
}
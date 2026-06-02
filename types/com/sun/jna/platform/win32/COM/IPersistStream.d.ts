import type { IPersist } from '../../../../../../com/sun/jna/platform/win32/COM/IPersist.d.ts'
import type { IStream } from '../../../../../../com/sun/jna/platform/win32/COM/IStream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IPersistStream extends IPersist, Object{
    GetSizeMax(): void;
    IsDirty(): boolean;
    Load(arg0: IStream): void;
    Save(arg0: IStream): void;
}
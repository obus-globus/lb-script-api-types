import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Guid$CLSID } from '../../../../../../com/sun/jna/platform/win32/Guid$CLSID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IPersist extends IUnknown, Object{
    GetClassID(): Guid$CLSID;
}
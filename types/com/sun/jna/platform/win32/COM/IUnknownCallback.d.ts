import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IUnknownCallback extends IUnknown, Object{
    getPointer(): Pointer;
}
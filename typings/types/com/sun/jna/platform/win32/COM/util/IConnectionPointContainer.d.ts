import type { IDispatch } from '../../../../../../../com/sun/jna/platform/win32/COM/IDispatch.d.ts'
import type { IRawDispatchHandle } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IRawDispatchHandle.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IConnectionPointContainer extends IRawDispatchHandle, Object{
    getRawDispatch(): IDispatch;
}
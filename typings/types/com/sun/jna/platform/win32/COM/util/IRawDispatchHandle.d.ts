import type { IDispatch } from '../../../../../../../com/sun/jna/platform/win32/COM/IDispatch.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IRawDispatchHandle extends Object{
    getRawDispatch(): IDispatch;
}
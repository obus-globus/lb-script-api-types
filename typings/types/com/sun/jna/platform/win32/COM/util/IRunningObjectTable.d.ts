import type { IDispatch } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IDispatch.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IRunningObjectTable extends Object{
    enumRunning(): IDispatch[];
    getActiveObjectsByInterface(arg0: Class<T>): T[];
}
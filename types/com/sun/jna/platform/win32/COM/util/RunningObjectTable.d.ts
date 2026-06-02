import type { RunningObjectTable } from '../../../../../../../com/sun/jna/platform/win32/COM/RunningObjectTable.d.ts'
import type { IDispatch } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IDispatch.d.ts'
import type { IRunningObjectTable } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IRunningObjectTable.d.ts'
import type { ObjectFactory } from '../../../../../../../com/sun/jna/platform/win32/COM/util/ObjectFactory.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RunningObjectTable extends Object implements IRunningObjectTable {
    constructor(arg0: RunningObjectTable, arg1: ObjectFactory)
    // private factory: ObjectFactory;
    // private raw: RunningObjectTable;
    enumRunning(): IDispatch[];
    getActiveObjectsByInterface(arg0: Class<T>): T[];
}
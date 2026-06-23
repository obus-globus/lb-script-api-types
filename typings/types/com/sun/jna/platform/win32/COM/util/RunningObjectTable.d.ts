import type { RunningObjectTable as RunningObjectTable_2 } from '../../../../../../../com/sun/jna/platform/win32/COM/RunningObjectTable.d.ts'
import type { IDispatch } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IDispatch.d.ts'
import type { IRunningObjectTable } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IRunningObjectTable.d.ts'
import type { ObjectFactory } from '../../../../../../../com/sun/jna/platform/win32/COM/util/ObjectFactory.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RunningObjectTable extends Object implements IRunningObjectTable {
    constructor(arg0: RunningObjectTable_2, arg1: ObjectFactory)
    // private factory: ObjectFactory;
    // private raw: RunningObjectTable_2;
    enumRunning(): IDispatch[];
    getActiveObjectsByInterface<T extends unknown>(arg0: Class<T>): T[];
}
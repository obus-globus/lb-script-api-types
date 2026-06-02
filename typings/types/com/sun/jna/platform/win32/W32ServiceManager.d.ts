import type { W32Service } from '../../../../../com/sun/jna/platform/win32/W32Service.d.ts'
import type { Winsvc$ENUM_SERVICE_STATUS_PROCESS } from '../../../../../com/sun/jna/platform/win32/Winsvc$ENUM_SERVICE_STATUS_PROCESS.d.ts'
import type { Winsvc$SC_HANDLE } from '../../../../../com/sun/jna/platform/win32/Winsvc$SC_HANDLE.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class W32ServiceManager extends Object implements Closeable {
    constructor()
    constructor(arg0: number)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: number)
    // private _databaseName: string;
    // private _handle: Winsvc$SC_HANDLE;
    // private _machineName: string;
    close(): void;
    enumServicesStatusExProcess(arg0: number, arg1: number, arg2: string): Winsvc$ENUM_SERVICE_STATUS_PROCESS[];
    getHandle(): Winsvc$SC_HANDLE;
    open(arg0: number): void;
    openService(arg0: string, arg1: number): W32Service;
}
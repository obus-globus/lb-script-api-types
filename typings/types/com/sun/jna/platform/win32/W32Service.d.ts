import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Winsvc$ENUM_SERVICE_STATUS } from '../../../../../com/sun/jna/platform/win32/Winsvc$ENUM_SERVICE_STATUS.d.ts'
import type { Winsvc$SC_ACTION } from '../../../../../com/sun/jna/platform/win32/Winsvc$SC_ACTION.d.ts'
import type { Winsvc$SC_HANDLE } from '../../../../../com/sun/jna/platform/win32/Winsvc$SC_HANDLE.d.ts'
import type { Winsvc$SERVICE_FAILURE_ACTIONS } from '../../../../../com/sun/jna/platform/win32/Winsvc$SERVICE_FAILURE_ACTIONS.d.ts'
import type { Winsvc$SERVICE_STATUS_PROCESS } from '../../../../../com/sun/jna/platform/win32/Winsvc$SERVICE_STATUS_PROCESS.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class W32Service extends Object implements Closeable {
    constructor(arg0: Winsvc$SC_HANDLE)
    // private _handle: Winsvc$SC_HANDLE;
    // private addShutdownPrivilegeToProcess(): void;
    close(): void;
    continueService(): void;
    enumDependentServices(arg0: number): Winsvc$ENUM_SERVICE_STATUS[];
    getFailureActions(): Winsvc$SERVICE_FAILURE_ACTIONS;
    getFailureActionsFlag(): boolean;
    getHandle(): Winsvc$SC_HANDLE;
    // private isPendingState(arg0: number): boolean;
    pauseService(): void;
    // private queryServiceConfig2(arg0: number): Pointer;
    queryStatus(): Winsvc$SERVICE_STATUS_PROCESS;
    sanitizeWaitTime(arg0: number): number;
    setFailureActions(arg0: Winsvc$SC_ACTION[], arg1: number, arg2: string, arg3: string): void;
    setFailureActionsFlag(arg0: boolean): void;
    startService(): void;
    stopService(): void;
    stopService(arg0: number): void;
    waitForNonPendingState(): void;
}
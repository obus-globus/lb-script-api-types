import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinNT$LUID } from '../../../../../com/sun/jna/platform/win32/WinNT$LUID.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Advapi32Util$Privilege extends Object implements Closeable {
    constructor(...arg0: string[])
    // private currentlyImpersonating: boolean;
    // private pLuids: WinNT$LUID[];
    // private privilegesEnabled: boolean;
    close(): void;
    disable(): void;
    enable(): Advapi32Util$Privilege;
    // private getThreadToken(): WinNT$HANDLE;
}
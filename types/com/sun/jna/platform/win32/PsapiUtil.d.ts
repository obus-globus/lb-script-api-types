import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class PsapiUtil extends Object {
    static GetProcessImageFileName(paramarg0: WinNT$HANDLE): string;
    static enumProcesses(): number[];
    constructor()
}
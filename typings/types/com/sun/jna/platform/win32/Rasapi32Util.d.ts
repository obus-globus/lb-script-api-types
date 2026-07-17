import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinRas$RASDIALPARAMS } from '../../../../../com/sun/jna/platform/win32/WinRas$RASDIALPARAMS.d.ts'
import type { WinRas$RASENTRY$ByReference } from '../../../../../com/sun/jna/platform/win32/WinRas$RASENTRY$ByReference.d.ts'
import type { WinRas$RASPPPIP } from '../../../../../com/sun/jna/platform/win32/WinRas$RASPPPIP.d.ts'
import type { WinRas$RasDialFunc2 } from '../../../../../com/sun/jna/platform/win32/WinRas$RasDialFunc2.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Rasapi32Util extends Object {
    static CONNECTION_STATE_TEXT: JavaMap<Object | null, Object | null>;
    static dialEntry(paramarg0: string): WinNT$HANDLE;
    static dialEntry(paramarg0: string, paramarg1: WinRas$RasDialFunc2): WinNT$HANDLE;
    static getIPProjection(paramarg0: WinNT$HANDLE): WinRas$RASPPPIP;
    static getPhoneBookDialingParams(paramarg0: string): WinRas$RASDIALPARAMS;
    static getPhoneBookEntry(paramarg0: string): WinRas$RASENTRY$ByReference;
    static getRasConnection(paramarg0: string): WinNT$HANDLE;
    static getRasConnectionStatusText(paramarg0: number): string;
    static getRasErrorString(paramarg0: number): string;
    static hangupRasConnection(paramarg0: WinNT$HANDLE): void;
    static hangupRasConnection(paramarg0: string): void;
    static setPhoneBookEntry(paramarg0: string, paramarg1: WinRas$RASENTRY$ByReference): void;
    constructor()
}
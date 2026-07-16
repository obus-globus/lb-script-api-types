import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Union } from '../../../../../com/sun/jna/Union.d.ts'
import type { WinRas$RASIPV4ADDR } from '../../../../../com/sun/jna/platform/win32/WinRas$RASIPV4ADDR.d.ts'
import type { WinRas$RASIPV6ADDR } from '../../../../../com/sun/jna/platform/win32/WinRas$RASIPV6ADDR.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinRas$RASTUNNELENDPOINT$UNION extends Union {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    ipv4: WinRas$RASIPV4ADDR;
    ipv6: WinRas$RASIPV6ADDR;
}
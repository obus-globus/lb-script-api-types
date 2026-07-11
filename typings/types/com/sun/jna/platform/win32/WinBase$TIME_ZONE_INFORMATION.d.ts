import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinBase$SYSTEMTIME } from '../../../../../com/sun/jna/platform/win32/WinBase$SYSTEMTIME.d.ts'
import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinBase$TIME_ZONE_INFORMATION extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    Bias: WinDef$LONG;
    DaylightBias: WinDef$LONG;
    DaylightDate: WinBase$SYSTEMTIME;
    DaylightName: string;
    StandardBias: WinDef$LONG;
    StandardDate: WinBase$SYSTEMTIME;
    StandardName: string;
}
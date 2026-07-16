import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$POWER_ACTION_POLICY } from '../../../../../com/sun/jna/platform/win32/WinNT$POWER_ACTION_POLICY.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinNT$SYSTEM_POWER_LEVEL extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    BatteryLevel: number;
    Enable: number;
    MinSystemState: number;
    PowerPolicy: WinNT$POWER_ACTION_POLICY;
    Spare: number[];
}
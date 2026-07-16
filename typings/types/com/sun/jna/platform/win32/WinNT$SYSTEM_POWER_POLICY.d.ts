import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$POWER_ACTION_POLICY } from '../../../../../com/sun/jna/platform/win32/WinNT$POWER_ACTION_POLICY.d.ts'
import type { WinNT$SYSTEM_POWER_LEVEL } from '../../../../../com/sun/jna/platform/win32/WinNT$SYSTEM_POWER_LEVEL.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinNT$SYSTEM_POWER_POLICY extends Structure {
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
    constructor(arg0: Pointer)
    BroadcastCapacityResolution: number;
    DischargePolicy: WinNT$SYSTEM_POWER_LEVEL[];
    DozeS4Timeout: number;
    DynamicThrottle: number;
    FanThrottleTolerance: number;
    ForcedThrottle: number;
    Idle: WinNT$POWER_ACTION_POLICY;
    IdleSensitivity: number;
    IdleTimeout: number;
    LidClose: WinNT$POWER_ACTION_POLICY;
    LidOpenWake: number;
    MaxSleep: number;
    MinSleep: number;
    MinThrottle: number;
    OptimizeForPower: number;
    OverThrottled: WinNT$POWER_ACTION_POLICY;
    PowerButton: WinNT$POWER_ACTION_POLICY;
    ReducedLatencySleep: number;
    Reserved: number;
    Revision: number;
    SleepButton: WinNT$POWER_ACTION_POLICY;
    Spare2: number[];
    Spare3: number;
    SpindownTimeout: number;
    VideoDimDisplay: number;
    VideoReserved: number[];
    VideoTimeout: number;
    WinLogonFlags: number;
}
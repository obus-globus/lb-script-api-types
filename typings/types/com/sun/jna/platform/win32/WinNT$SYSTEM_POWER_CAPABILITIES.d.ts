import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$BATTERY_REPORTING_SCALE } from '../../../../../com/sun/jna/platform/win32/WinNT$BATTERY_REPORTING_SCALE.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinNT$SYSTEM_POWER_CAPABILITIES extends Structure {
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
    constructor(arg0: Pointer)
    AcOnLineWake: number;
    AoAc: number;
    AoAcConnectivitySupported: number;
    ApmPresent: number;
    BatteriesAreShortTerm: number;
    BatteryScale: WinNT$BATTERY_REPORTING_SCALE[];
    DefaultLowLatencyWake: number;
    DiskSpinDown: number;
    FastSystemS4: number;
    FullWake: number;
    HiberFilePresent: number;
    HiberFileType: number;
    Hiberboot: number;
    LidPresent: number;
    MinDeviceWakeState: number;
    PowerButtonPresent: number;
    ProcessorMaxThrottle: number;
    ProcessorMinThrottle: number;
    ProcessorThrottle: number;
    RtcWake: number;
    SleepButtonPresent: number;
    SoftLidWake: number;
    SystemBatteriesPresent: number;
    SystemS1: number;
    SystemS2: number;
    SystemS3: number;
    SystemS4: number;
    SystemS5: number;
    ThermalControl: number;
    UpsPresent: number;
    VideoDimPresent: number;
    WakeAlarmPresent: number;
    spare3: number[];
}
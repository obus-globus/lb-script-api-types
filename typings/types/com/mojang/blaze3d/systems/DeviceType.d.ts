import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DeviceType extends Enum<DeviceType> {
    static CPU: DeviceType;
    static DISCRETE: DeviceType;
    static INTEGRATED: DeviceType;
    static OTHER: DeviceType;
    static VIRTUAL: DeviceType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DeviceType;
    static values(): DeviceType[];
    private constructor()
    name(): "OTHER" | "INTEGRATED" | "DISCRETE" | "VIRTUAL" | "CPU";
}
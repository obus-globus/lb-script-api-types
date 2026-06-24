import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DeviceType extends Enum<DeviceType> {
    static CPU: DeviceType;
    static DISCRETE: DeviceType;
    static INTEGRATED: DeviceType;
    static OTHER: DeviceType;
    static VIRTUAL: DeviceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DeviceType;
    static values(): (Object | null)[];
    private constructor()
    name(): "OTHER" | "INTEGRATED" | "DISCRETE" | "VIRTUAL" | "CPU";
}
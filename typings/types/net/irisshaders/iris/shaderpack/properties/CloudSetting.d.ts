import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CloudSetting extends Enum<CloudSetting> {
    static DEFAULT: CloudSetting;
    static FANCY: CloudSetting;
    static FAST: CloudSetting;
    static OFF: CloudSetting;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CloudSetting;
    static values(): CloudSetting[];
    private constructor()
    name(): "DEFAULT" | "FAST" | "FANCY" | "OFF";
}
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CloudSetting extends Enum<CloudSetting> {
    static DEFAULT: CloudSetting;
    static FANCY: CloudSetting;
    static FAST: CloudSetting;
    static OFF: CloudSetting;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CloudSetting;
    static values(): (Object | null)[];
    private constructor()
    name(): "DEFAULT" | "FAST" | "FANCY" | "OFF";
}
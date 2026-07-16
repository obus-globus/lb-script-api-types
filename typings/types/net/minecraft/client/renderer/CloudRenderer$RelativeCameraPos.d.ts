import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CloudRenderer$RelativeCameraPos extends Enum<CloudRenderer$RelativeCameraPos> {
    static ABOVE_CLOUDS: CloudRenderer$RelativeCameraPos;
    static BELOW_CLOUDS: CloudRenderer$RelativeCameraPos;
    static INSIDE_CLOUDS: CloudRenderer$RelativeCameraPos;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CloudRenderer$RelativeCameraPos;
    static values(): CloudRenderer$RelativeCameraPos[];
    private constructor()
    name(): "ABOVE_CLOUDS" | "INSIDE_CLOUDS" | "BELOW_CLOUDS";
}
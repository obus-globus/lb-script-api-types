import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CloudRenderer$RelativeCameraPos extends Enum<CloudRenderer$RelativeCameraPos> {
    static ABOVE_CLOUDS: CloudRenderer$RelativeCameraPos;
    static BELOW_CLOUDS: CloudRenderer$RelativeCameraPos;
    static INSIDE_CLOUDS: CloudRenderer$RelativeCameraPos;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CloudRenderer$RelativeCameraPos;
    static values(): (Object | null)[];
    private constructor()
    name(): "ABOVE_CLOUDS" | "INSIDE_CLOUDS" | "BELOW_CLOUDS";
}
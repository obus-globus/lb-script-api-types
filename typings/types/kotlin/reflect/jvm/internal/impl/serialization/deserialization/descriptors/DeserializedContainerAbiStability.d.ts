import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class DeserializedContainerAbiStability extends Enum<DeserializedContainerAbiStability> {
    static STABLE: DeserializedContainerAbiStability;
    static UNSTABLE: DeserializedContainerAbiStability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DeserializedContainerAbiStability;
    static values(): (Object | null)[];
    private constructor()
    name(): "STABLE" | "UNSTABLE";
}
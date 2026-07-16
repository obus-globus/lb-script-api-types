import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class DeserializedContainerAbiStability extends Enum<DeserializedContainerAbiStability> {
    static STABLE: DeserializedContainerAbiStability;
    static UNSTABLE: DeserializedContainerAbiStability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DeserializedContainerAbiStability;
    static values(): DeserializedContainerAbiStability[];
    private constructor()
    name(): "STABLE" | "UNSTABLE";
}
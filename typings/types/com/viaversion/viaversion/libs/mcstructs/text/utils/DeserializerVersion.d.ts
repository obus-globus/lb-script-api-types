import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DeserializerVersion extends Enum<DeserializerVersion> {
    static V1_12: DeserializerVersion;
    static V1_14: DeserializerVersion;
    static V1_15: DeserializerVersion;
    static V1_16: DeserializerVersion;
    static V1_17: DeserializerVersion;
    static V1_18: DeserializerVersion;
    static V1_19_4: DeserializerVersion;
    static V1_20_3: DeserializerVersion;
    static V1_20_5: DeserializerVersion;
    static V1_21_2: DeserializerVersion;
    static V1_21_4: DeserializerVersion;
    static V1_21_5: DeserializerVersion;
    static V1_6: DeserializerVersion;
    static V1_7: DeserializerVersion;
    static V1_8: DeserializerVersion;
    static V1_9: DeserializerVersion;
    static ranged(paramarg0: DeserializerVersion, paramarg1: DeserializerVersion): DeserializerVersion[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DeserializerVersion;
    static values(): DeserializerVersion[];
    private constructor()
    isIn(...arg0: DeserializerVersion[]): boolean;
    name(): "V1_6" | "V1_7" | "V1_8" | "V1_9" | "V1_12" | "V1_14" | "V1_15" | "V1_16" | "V1_17" | "V1_18" | "V1_19_4" | "V1_20_3" | "V1_20_5" | "V1_21_2" | "V1_21_4" | "V1_21_5";
}
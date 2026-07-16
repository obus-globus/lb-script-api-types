import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ViaBedrockUtilityInterface$PayloadType extends Enum<ViaBedrockUtilityInterface$PayloadType> {
    static ANIMATE: ViaBedrockUtilityInterface$PayloadType;
    static CAPE: ViaBedrockUtilityInterface$PayloadType;
    static CONFIRM: ViaBedrockUtilityInterface$PayloadType;
    static MODEL_REQUEST: ViaBedrockUtilityInterface$PayloadType;
    static SKIN_DATA: ViaBedrockUtilityInterface$PayloadType;
    static SKIN_INFORMATION: ViaBedrockUtilityInterface$PayloadType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ViaBedrockUtilityInterface$PayloadType;
    static values(): ViaBedrockUtilityInterface$PayloadType[];
    private constructor()
    name(): "CONFIRM" | "MODEL_REQUEST" | "ANIMATE" | "CAPE" | "SKIN_INFORMATION" | "SKIN_DATA";
}
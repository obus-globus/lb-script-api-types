import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ELFAnalyser$ArmAeabiAttributesTag$ParameterType extends Enum<ELFAnalyser$ArmAeabiAttributesTag$ParameterType> {
    static NTBS: ELFAnalyser$ArmAeabiAttributesTag$ParameterType;
    static UINT32: ELFAnalyser$ArmAeabiAttributesTag$ParameterType;
    static ULEB128: ELFAnalyser$ArmAeabiAttributesTag$ParameterType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ELFAnalyser$ArmAeabiAttributesTag$ParameterType;
    static values(): (Object | null)[];
    private constructor()
    name(): "UINT32" | "NTBS" | "ULEB128";
}
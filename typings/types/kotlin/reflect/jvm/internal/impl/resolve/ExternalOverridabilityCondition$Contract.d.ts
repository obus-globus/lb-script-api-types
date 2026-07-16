import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ExternalOverridabilityCondition$Contract extends Enum<ExternalOverridabilityCondition$Contract> {
    static BOTH: ExternalOverridabilityCondition$Contract;
    static CONFLICTS_ONLY: ExternalOverridabilityCondition$Contract;
    static SUCCESS_ONLY: ExternalOverridabilityCondition$Contract;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ExternalOverridabilityCondition$Contract;
    static values(): ExternalOverridabilityCondition$Contract[];
    private constructor()
    name(): "CONFLICTS_ONLY" | "SUCCESS_ONLY" | "BOTH";
}
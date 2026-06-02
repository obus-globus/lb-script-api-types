import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class VelocityModify$VelocityTriggerFilter extends Enum<VelocityModify$VelocityTriggerFilter> implements Tagged {
    static ALWAYS: VelocityModify$VelocityTriggerFilter;
    static Companion: Tagged$Companion;
    static IN_AIR: VelocityModify$VelocityTriggerFilter;
    static ON_GROUND: VelocityModify$VelocityTriggerFilter;
    static getEntries(): VelocityModify$VelocityTriggerFilter[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VelocityModify$VelocityTriggerFilter;
    static values(): (Object | null)[];
    private constructor(tag: string, condition: () => kotlin.Boolean)
    readonly condition: () => kotlin.Boolean;
    readonly tag: string;
    name(): "ALWAYS" | "ON_GROUND" | "IN_AIR";
}
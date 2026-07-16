import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class FeatureChestAura$PauseCondition extends Enum<FeatureChestAura$PauseCondition> implements BooleanSupplier, Tagged {
    static COMBAT: FeatureChestAura$PauseCondition;
    static Companion: Tagged$Companion;
    static USING_ITEM: FeatureChestAura$PauseCondition;
    static getEntries(): FeatureChestAura$PauseCondition[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FeatureChestAura$PauseCondition;
    static values(): FeatureChestAura$PauseCondition[];
    private constructor(tag: string)
    readonly tag: string;
    getAsBoolean(): boolean;
    name(): "COMBAT" | "USING_ITEM";
}
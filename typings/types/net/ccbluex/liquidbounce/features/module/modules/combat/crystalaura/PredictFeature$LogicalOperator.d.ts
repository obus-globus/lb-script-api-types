import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { DamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.d.ts'
export class PredictFeature$LogicalOperator extends Enum<PredictFeature$LogicalOperator> implements Tagged {
    static AND: PredictFeature$LogicalOperator;
    static Companion: Tagged$Companion;
    static OR: PredictFeature$LogicalOperator;
    static getEntries(): PredictFeature$LogicalOperator[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PredictFeature$LogicalOperator;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    getDamageProvider(damage: number, damage1: number): DamageProvider;
    name(): "AND" | "OR";
}
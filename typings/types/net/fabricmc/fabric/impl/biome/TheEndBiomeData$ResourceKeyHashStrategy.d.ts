import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
export class TheEndBiomeData$ResourceKeyHashStrategy extends Enum<TheEndBiomeData$ResourceKeyHashStrategy> implements Hash$Strategy<Holder<Object>> {
    static INSTANCE: TheEndBiomeData$ResourceKeyHashStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TheEndBiomeData$ResourceKeyHashStrategy;
    static values(): (Object | null)[];
    private constructor()
    equals(other: Object | null): boolean;
    equals(arg0: Holder<Object>, arg1: Holder<Object>): boolean;
    hashCode(): number;
    hashCode(arg0: Holder<Object>): number;
    name(): "INSTANCE";
}
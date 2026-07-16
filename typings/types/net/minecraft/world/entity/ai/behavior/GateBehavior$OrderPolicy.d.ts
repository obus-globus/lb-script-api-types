import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GateBehavior$OrderPolicy extends Enum<GateBehavior$OrderPolicy> {
    static ORDERED: GateBehavior$OrderPolicy;
    static SHUFFLED: GateBehavior$OrderPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GateBehavior$OrderPolicy;
    static values(): GateBehavior$OrderPolicy[];
    private constructor(consumer: (param0: Object[]) => void)
    // private consumer: (param0: Object[]) => void;
    apply(list: Object[]): void;
    name(): "ORDERED" | "SHUFFLED";
}
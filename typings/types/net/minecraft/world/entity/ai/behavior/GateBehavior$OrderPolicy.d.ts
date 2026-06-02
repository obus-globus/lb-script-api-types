import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GateBehavior$OrderPolicy extends Enum<GateBehavior$OrderPolicy> {
    static ORDERED: GateBehavior$OrderPolicy;
    static SHUFFLED: GateBehavior$OrderPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GateBehavior$OrderPolicy;
    static values(): (Object | null)[];
    private constructor(consumer: (param0: U[]) => void)
    // private consumer: (param0: U[]) => void;
    apply(list: U[]): void;
    name(): "ORDERED" | "SHUFFLED";
}
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Subscription$SubscriptionType extends Enum<Subscription$SubscriptionType> {
    static NORMAL: Subscription$SubscriptionType;
    static RECURRING: Subscription$SubscriptionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Subscription$SubscriptionType;
    static values(): Subscription$SubscriptionType[];
    private constructor()
    name(): "NORMAL" | "RECURRING";
}
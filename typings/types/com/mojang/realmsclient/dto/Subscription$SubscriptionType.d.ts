import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Subscription$SubscriptionType extends Enum<Subscription$SubscriptionType> {
    static NORMAL: Subscription$SubscriptionType;
    static RECURRING: Subscription$SubscriptionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Subscription$SubscriptionType;
    static values(): Subscription$SubscriptionType[];
    private constructor()
    name(): "NORMAL" | "RECURRING";
}
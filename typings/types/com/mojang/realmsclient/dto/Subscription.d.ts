import type { Subscription$SubscriptionType } from '../../../../com/mojang/realmsclient/dto/Subscription$SubscriptionType.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Subscription extends Record {
    static parse(paramjson: string): Subscription;
    constructor(startDate: Instant, daysLeft: number, type: Subscription$SubscriptionType)
    // private daysLeft: number;
    // private startDate: Instant;
    // private type: Subscription$SubscriptionType;
    daysLeft(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    startDate(): Instant;
    toString(): string;
    type(): Subscription$SubscriptionType;
}
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PeriodicNotificationManager$Notification extends Record {
    // private delay: number;
    // private message: string;
    // private period: number;
    // private title: string;
    delay(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): string;
    period(): number;
    title(): string;
    toString(): string;
}
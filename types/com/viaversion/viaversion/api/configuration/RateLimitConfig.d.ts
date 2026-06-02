import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RateLimitConfig extends Record {
    // private enabled: boolean;
    // private maxRate: number;
    // private maxRateKickMessage: string;
    // private maxWarnings: number;
    // private ratePlaceholder: string;
    // private trackingPeriodNanos: number;
    // private warningKickMessage: string;
    // private warningRate: number;
    enabled(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    maxRate(): number;
    maxRateKickMessage(): string;
    maxWarnings(): number;
    ratePlaceholder(): string;
    toString(): string;
    trackingPeriodNanos(): number;
    warningKickMessage(): string;
    warningRate(): number;
}
import type { Object } from '../java/lang/Object.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class Timeout$Companion extends Object {
    NONE: Timeout;
    minTimeout(aNanos: number, bNanos: number): number;
}
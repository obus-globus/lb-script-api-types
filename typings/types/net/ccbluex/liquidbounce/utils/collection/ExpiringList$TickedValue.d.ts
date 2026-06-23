import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExpiringList$TickedValue<T extends unknown> extends Object {
    constructor(value: T, expiration: number)
    readonly expiration: number;
    readonly value: T;
}
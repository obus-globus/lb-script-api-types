import type { Object } from '../../../java/lang/Object.d.ts'
export class AddressPolicy extends Object {
    constructor(minimumConcurrentCalls: number, backoffDelayMillis: number, backoffJitterMillis: number)
    backoffDelayMillis: number;
    backoffJitterMillis: number;
    minimumConcurrentCalls: number;
}
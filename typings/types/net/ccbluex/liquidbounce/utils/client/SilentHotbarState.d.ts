import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SilentHotbarState extends Object {
    constructor(enforcedHotbarSlot: number, requester: Object | null, ticksUntilReset: number, clientsideSlot: number)
    readonly clientsideSlot: number;
    readonly enforcedHotbarSlot: number;
    readonly requester: Object | null;
    readonly ticksUntilReset: number;
}
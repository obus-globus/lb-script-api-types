import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SilentHotbarState extends Object {
    constructor(enforcedHotbarSlot: number, requester: Object | null, ticksUntilReset: number, clientsideSlot: number)
    clientsideSlot: number;
    readonly enforcedHotbarSlot: number;
    requester: Object | null;
    ticksUntilReset: number;
}
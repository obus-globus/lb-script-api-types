import type { Buff } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/Buff.d.ts'
export abstract class HealthBasedBuff extends Buff {
    constructor(name: string)
    // private considerAbsorption: boolean;
    // private /*not mapped: */ getConsiderAbsorption(): boolean;
    readonly health: number;
    // private healthPercent: number;
    // private /*not mapped: */ getHealthPercent(): number;
    /*not mapped: */ getPassesHealthRequirements$net_ccbluex_liquidbounce(): boolean;
    /*not mapped: */ getPassesRequirements$net_ccbluex_liquidbounce(): boolean;
}
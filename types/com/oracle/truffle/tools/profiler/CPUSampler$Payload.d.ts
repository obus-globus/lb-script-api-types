import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CPUSampler$Payload extends Object {
    constructor()
    readonly selfHitTimes: number[];
    // private selfTierCount: number[];
    // private tierCount: number[];
    addSelfHitTime(time: number): void;
    getHitCount(): number;
    getNumberOfTiers(): number;
    getSelfHitCount(): number;
    getSelfHitTimes(): number[];
    getTierSelfCount(tier: number): number;
    getTierTotalCount(tier: number): number;
}
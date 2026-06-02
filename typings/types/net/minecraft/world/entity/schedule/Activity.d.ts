import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Activity extends Object {
    static ADMIRE_ITEM: Activity;
    static AVOID: Activity;
    static CELEBRATE: Activity;
    static CORE: Activity;
    static DIG: Activity;
    static EMERGE: Activity;
    static FIGHT: Activity;
    static HIDE: Activity;
    static IDLE: Activity;
    static INVESTIGATE: Activity;
    static LAY_SPAWN: Activity;
    static LONG_JUMP: Activity;
    static MEET: Activity;
    static PANIC: Activity;
    static PLAY: Activity;
    static PLAY_DEAD: Activity;
    static PRE_RAID: Activity;
    static RAID: Activity;
    static RAM: Activity;
    static REST: Activity;
    static RIDE: Activity;
    static ROAR: Activity;
    static SNIFF: Activity;
    static SWIM: Activity;
    static TONGUE: Activity;
    static WORK: Activity;
    constructor(name: string)
    // private hashCode: number;
    readonly name: string;
    equals(o: Object | null): boolean;
    getName(): string;
    hashCode(): number;
    toString(): string;
}
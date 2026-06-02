import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class Player$BedSleepingProblem extends Record {
    static NOT_SAFE: Player$BedSleepingProblem;
    static OBSTRUCTED: Player$BedSleepingProblem;
    static OTHER_PROBLEM: Player$BedSleepingProblem;
    static TOO_FAR_AWAY: Player$BedSleepingProblem;
    constructor(message: Component)
    // private message: Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): Component;
    toString(): string;
}
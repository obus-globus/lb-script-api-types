import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Ban extends Object {
    constructor(serverName: string, reason: string, bannedUntil: number)
    readonly bannedUntil: number;
    /*not mapped: */ isPermanent(): boolean;
    readonly reason: string;
    readonly serverName: string;
    component1(): string;
    component2(): string;
    component3(): number;
    copy(serverName: string, reason: string, bannedUntil: number): Ban;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
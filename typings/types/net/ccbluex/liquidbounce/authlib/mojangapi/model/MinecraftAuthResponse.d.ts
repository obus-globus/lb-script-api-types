import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MinecraftAuthResponse extends Record {
    constructor(username: string, roles: Object[], accessToken: string, tokenType: string, expiresIn: number)
    // private accessToken: string;
    /*not mapped: */ accessToken(): string;
    // private expiresIn: number;
    /*not mapped: */ expiresIn(): number;
    // private roles: Object[];
    /*not mapped: */ roles(): Object[];
    // private tokenType: string;
    /*not mapped: */ tokenType(): string;
    // private username: string;
    /*not mapped: */ username(): string;
    component1(): string;
    component2(): Object[];
    component3(): string;
    component4(): string;
    component5(): number;
    copy(username: string, roles: Object[], accessToken: string, tokenType: string, expiresIn: number): MinecraftAuthResponse;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
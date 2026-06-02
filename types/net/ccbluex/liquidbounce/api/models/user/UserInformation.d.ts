import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UserInformation extends Object {
    constructor(userId: string, email: string, name: string | null, nickname: string | null, groups: string[], premium: boolean, admin: boolean)
    readonly admin: boolean;
    readonly email: string;
    readonly groups: string[];
    readonly name: string | null;
    readonly nickname: string | null;
    readonly premium: boolean;
    readonly userId: string;
    component1(): string;
    component2(): string;
    component3(): string | null;
    component4(): string | null;
    component5(): string[];
    component6(): boolean;
    component7(): boolean;
    copy(userId: string, email: string, name: string | null, nickname: string | null, groups: string[], premium: boolean, admin: boolean): UserInformation;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
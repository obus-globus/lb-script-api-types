import type { Object } from '../../../../java/lang/Object.d.ts'
export class User extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string)
    // private avatar: string;
    readonly discriminator: string;
    readonly id: number;
    readonly nickname: string;
    // private username: string;
    equals(arg0: Object | null): boolean;
    getAsMention(): string;
    getAvatarId(): string;
    getAvatarUrl(): string;
    getDefaultAvatarId(): string;
    getDefaultAvatarUrl(): string;
    getDiscriminator(): string;
    getEffectiveAvatarUrl(): string;
    getEffectiveName(): string;
    getId(): string;
    getIdLong(): number;
    getName(): string;
    getNickname(): string;
    hashCode(): number;
    isBot(): boolean;
    toString(): string;
}
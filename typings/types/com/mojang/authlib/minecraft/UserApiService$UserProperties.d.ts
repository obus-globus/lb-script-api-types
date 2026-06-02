import type { BanDetails } from '../../../../com/mojang/authlib/minecraft/BanDetails.d.ts'
import type { UserApiService$UserFlag } from '../../../../com/mojang/authlib/minecraft/UserApiService$UserFlag.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UserApiService$UserProperties extends Record {
    constructor(flags: UserApiService$UserFlag[], bannedScopes: { [key: string]: BanDetails })
    // private bannedScopes: { [key: string]: BanDetails };
    // private flags: UserApiService$UserFlag[];
    bannedScopes(): { [key: string]: BanDetails };
    equals(arg0: Object | null): boolean;
    flag(arg0: UserApiService$UserFlag): boolean;
    flags(): UserApiService$UserFlag[];
    hashCode(): number;
    toString(): string;
}
import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { BanDetails } from '../../../../com/mojang/authlib/minecraft/BanDetails.d.ts'
import type { UserApiService$UserFlag } from '../../../../com/mojang/authlib/minecraft/UserApiService$UserFlag.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UserApiService$UserProperties extends Record {
    constructor(flags: UserApiService$UserFlag[], bannedScopes: JavaMap<string, BanDetails>)
    // private bannedScopes: JavaMap<string, BanDetails>;
    // private flags: UserApiService$UserFlag[];
    bannedScopes(): JavaMap<string, BanDetails>;
    equals(arg0: Object | null): boolean;
    flag(arg0: UserApiService$UserFlag): boolean;
    flags(): UserApiService$UserFlag[];
    hashCode(): number;
    toString(): string;
}
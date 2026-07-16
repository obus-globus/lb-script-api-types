import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PublicApi extends Enum<PublicApi> {
    static ACQUIRE_TOKEN_BY_AUTHORIZATION_CODE: PublicApi;
    static ACQUIRE_TOKEN_BY_DEVICE_CODE_FLOW: PublicApi;
    static ACQUIRE_TOKEN_BY_INTEGRATED_WINDOWS_AUTH: PublicApi;
    static ACQUIRE_TOKEN_BY_REFRESH_TOKEN: PublicApi;
    static ACQUIRE_TOKEN_BY_SYSTEM_ASSIGNED_MANAGED_IDENTITY: PublicApi;
    static ACQUIRE_TOKEN_BY_USERNAME_PASSWORD: PublicApi;
    static ACQUIRE_TOKEN_BY_USER_ASSIGNED_MANAGED_IDENTITY: PublicApi;
    static ACQUIRE_TOKEN_FOR_CLIENT: PublicApi;
    static ACQUIRE_TOKEN_INTERACTIVE: PublicApi;
    static ACQUIRE_TOKEN_ON_BEHALF_OF: PublicApi;
    static ACQUIRE_TOKEN_SILENTLY: PublicApi;
    static GET_ACCOUNTS: PublicApi;
    static REMOVE_ACCOUNTS: PublicApi;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PublicApi;
    static values(): PublicApi[];
    private constructor(arg2: number)
    // private apiId: number;
    getApiId(): number;
    name(): "ACQUIRE_TOKEN_BY_REFRESH_TOKEN" | "ACQUIRE_TOKEN_INTERACTIVE" | "ACQUIRE_TOKEN_BY_USERNAME_PASSWORD" | "ACQUIRE_TOKEN_BY_INTEGRATED_WINDOWS_AUTH" | "ACQUIRE_TOKEN_ON_BEHALF_OF" | "ACQUIRE_TOKEN_BY_DEVICE_CODE_FLOW" | "ACQUIRE_TOKEN_FOR_CLIENT" | "ACQUIRE_TOKEN_BY_AUTHORIZATION_CODE" | "ACQUIRE_TOKEN_SILENTLY" | "GET_ACCOUNTS" | "REMOVE_ACCOUNTS" | "ACQUIRE_TOKEN_BY_SYSTEM_ASSIGNED_MANAGED_IDENTITY" | "ACQUIRE_TOKEN_BY_USER_ASSIGNED_MANAGED_IDENTITY";
}
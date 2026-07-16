import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MsaEnvironment extends Enum<MsaEnvironment> {
    static LIVE: MsaEnvironment;
    static MICROSOFT_ONLINE_COMMON: MsaEnvironment;
    static MICROSOFT_ONLINE_CONSUMERS: MsaEnvironment;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MsaEnvironment;
    static values(): MsaEnvironment[];
    private constructor(arg2: string, arg3: string, arg4: string, arg5: string, arg6: string)
    readonly authorizePath: string;
    readonly baseUrl: string;
    readonly deviceCodePath: string;
    readonly nativeClientPath: string;
    readonly tokenPath: string;
    getAuthorizePath(): string;
    getAuthorizeUrl(): string;
    getBaseUrl(): string;
    getDeviceCodePath(): string;
    getDeviceCodeUrl(): string;
    getNativeClientPath(): string;
    getNativeClientUrl(): string;
    getTokenPath(): string;
    getTokenUrl(): string;
    name(): "LIVE" | "MICROSOFT_ONLINE_COMMON" | "MICROSOFT_ONLINE_CONSUMERS";
}
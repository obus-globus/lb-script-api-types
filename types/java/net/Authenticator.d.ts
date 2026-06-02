import type { Authenticator$RequestorType } from '../../java/net/Authenticator$RequestorType.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { PasswordAuthentication } from '../../java/net/PasswordAuthentication.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Authenticator extends Object {
    static getDefault(): Authenticator;
    static requestPasswordAuthentication(paramarg0: string, paramarg1: InetAddress, paramarg2: number, paramarg3: string, paramarg4: string, paramarg5: string): PasswordAuthentication;
    static requestPasswordAuthentication(paramarg0: string, paramarg1: InetAddress, paramarg2: number, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: URL, paramarg7: Authenticator$RequestorType): PasswordAuthentication;
    static requestPasswordAuthentication(paramarg0: Authenticator, paramarg1: string, paramarg2: InetAddress, paramarg3: number, paramarg4: string, paramarg5: string, paramarg6: string, paramarg7: URL, paramarg8: Authenticator$RequestorType): PasswordAuthentication;
    static requestPasswordAuthentication(paramarg0: InetAddress, paramarg1: number, paramarg2: string, paramarg3: string, paramarg4: string): PasswordAuthentication;
    static setDefault(paramarg0: Authenticator): void;
    constructor()
    // private requestingAuthType: Authenticator$RequestorType;
    // private requestingHost: string;
    // private requestingPort: number;
    // private requestingPrompt: string;
    // private requestingProtocol: string;
    // private requestingScheme: string;
    // private requestingSite: InetAddress;
    // private requestingURL: URL;
    getPasswordAuthentication(): PasswordAuthentication;
    getRequestingHost(): string;
    getRequestingPort(): number;
    getRequestingPrompt(): string;
    getRequestingProtocol(): string;
    getRequestingScheme(): string;
    getRequestingSite(): InetAddress;
    getRequestingURL(): URL;
    getRequestorType(): Authenticator$RequestorType;
    requestPasswordAuthenticationInstance(arg0: string, arg1: InetAddress, arg2: number, arg3: string, arg4: string, arg5: string, arg6: URL, arg7: Authenticator$RequestorType): PasswordAuthentication;
    // private reset(): void;
}
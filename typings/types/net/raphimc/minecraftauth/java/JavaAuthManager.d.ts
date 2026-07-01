import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpClient } from '../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { JavaAuthManager$Builder } from '../../../../net/raphimc/minecraftauth/java/JavaAuthManager$Builder.d.ts'
import type { MinecraftPlayerCertificates } from '../../../../net/raphimc/minecraftauth/java/model/MinecraftPlayerCertificates.d.ts'
import type { MinecraftProfile } from '../../../../net/raphimc/minecraftauth/java/model/MinecraftProfile.d.ts'
import type { MinecraftToken } from '../../../../net/raphimc/minecraftauth/java/model/MinecraftToken.d.ts'
import type { MsaApplicationConfig } from '../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { Holder } from '../../../../net/raphimc/minecraftauth/util/holder/Holder.d.ts'
import type { ChangeListeners } from '../../../../net/raphimc/minecraftauth/util/holder/listener/ChangeListeners.d.ts'
import type { XblDeviceToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblDeviceToken.d.ts'
import type { XblTitleToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblTitleToken.d.ts'
import type { XblUserToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblUserToken.d.ts'
import type { XblXstsToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class JavaAuthManager extends Object {
    static create(paramarg0: HttpClient): JavaAuthManager$Builder;
    static fromJson(paramarg0: HttpClient, paramarg1: JsonObject): JavaAuthManager;
    static fromJson(paramarg0: HttpClient, paramarg1: Map$Entry<string, GsonElement>[]): JavaAuthManager;
    static toJson(paramarg0: JavaAuthManager): JsonObject;
    constructor(arg0: HttpClient, arg1: MsaApplicationConfig, arg2: string, arg3: KeyPair, arg4: UUID, arg5: MsaToken, arg6: any)
    readonly changeListeners: ChangeListeners;
    readonly deviceId: UUID;
    readonly deviceKeyPair: KeyPair;
    readonly deviceType: string;
    readonly httpClient: HttpClient;
    readonly javaXstsToken: Holder<XblXstsToken>;
    readonly minecraftPlayerCertificates: Holder<MinecraftPlayerCertificates>;
    readonly minecraftProfile: Holder<MinecraftProfile>;
    readonly minecraftToken: Holder<MinecraftToken>;
    readonly msaApplicationConfig: MsaApplicationConfig;
    readonly msaToken: Holder<MsaToken>;
    // private sisuTokensLock: Object;
    readonly xblDeviceToken: Holder<XblDeviceToken>;
    readonly xblTitleToken: Holder<XblTitleToken>;
    readonly xblUserToken: Holder<XblUserToken>;
    getChangeListeners(): ChangeListeners;
    getDeviceId(): UUID;
    getDeviceKeyPair(): KeyPair;
    getDeviceType(): string;
    getHttpClient(): HttpClient;
    getJavaXstsToken(): Holder<XblXstsToken>;
    getMinecraftPlayerCertificates(): Holder<MinecraftPlayerCertificates>;
    getMinecraftProfile(): Holder<MinecraftProfile>;
    getMinecraftToken(): Holder<MinecraftToken>;
    getMsaApplicationConfig(): MsaApplicationConfig;
    getMsaToken(): Holder<MsaToken>;
    getXblDeviceToken(): Holder<XblDeviceToken>;
    getXblTitleToken(): Holder<XblTitleToken>;
    getXblUserToken(): Holder<XblUserToken>;
    // private hookChangeListeners(): void;
    // private refreshJavaXstsToken(): XblXstsToken;
    // private refreshMinecraftPlayerCertificates(): MinecraftPlayerCertificates;
    // private refreshMinecraftProfile(): MinecraftProfile;
    // private refreshMinecraftToken(): MinecraftToken;
    // private refreshMsaToken(): MsaToken;
    // private refreshSisuTokens(): void;
    // private refreshXblDeviceToken(): XblDeviceToken;
    // private refreshXblTitleToken(): XblTitleToken;
    // private refreshXblUserToken(): XblUserToken;
}
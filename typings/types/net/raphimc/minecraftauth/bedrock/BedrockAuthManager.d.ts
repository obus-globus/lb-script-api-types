import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpClient } from '../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { BedrockAuthManager$Builder } from '../../../../net/raphimc/minecraftauth/bedrock/BedrockAuthManager$Builder.d.ts'
import type { MinecraftCertificateChain } from '../../../../net/raphimc/minecraftauth/bedrock/model/MinecraftCertificateChain.d.ts'
import type { MinecraftMultiplayerToken } from '../../../../net/raphimc/minecraftauth/bedrock/model/MinecraftMultiplayerToken.d.ts'
import type { MinecraftSession } from '../../../../net/raphimc/minecraftauth/bedrock/model/MinecraftSession.d.ts'
import type { MsaApplicationConfig } from '../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { PlayFabEntityToken } from '../../../../net/raphimc/minecraftauth/playfab/model/PlayFabEntityToken.d.ts'
import type { PlayFabToken } from '../../../../net/raphimc/minecraftauth/playfab/model/PlayFabToken.d.ts'
import type { Holder } from '../../../../net/raphimc/minecraftauth/util/holder/Holder.d.ts'
import type { ChangeListeners } from '../../../../net/raphimc/minecraftauth/util/holder/listener/ChangeListeners.d.ts'
import type { XblDeviceToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblDeviceToken.d.ts'
import type { XblTitleToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblTitleToken.d.ts'
import type { XblUserToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblUserToken.d.ts'
import type { XblXstsToken } from '../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class BedrockAuthManager extends Object {
    static create(paramarg0: HttpClient, paramarg1: string): BedrockAuthManager$Builder;
    static fromJson(paramarg0: HttpClient, paramarg1: string, paramarg2: JsonObject): BedrockAuthManager;
    static fromJson(paramarg0: HttpClient, paramarg1: string, paramarg2: Map$Entry<string, GsonElement>[]): BedrockAuthManager;
    static toJson(paramarg0: BedrockAuthManager): JsonObject;
    private constructor(arg0: HttpClient, arg1: string, arg2: MsaApplicationConfig, arg3: string, arg4: KeyPair, arg5: UUID, arg6: KeyPair, arg7: MsaToken)
    private constructor(arg0: HttpClient, arg1: string, arg2: MsaApplicationConfig, arg3: string, arg4: KeyPair, arg5: UUID, arg6: KeyPair, arg7: MsaToken, arg8: XblDeviceToken, arg9: XblUserToken, arg10: XblTitleToken, arg11: XblXstsToken, arg12: XblXstsToken, arg13: XblXstsToken, arg14: XblXstsToken, arg15: PlayFabToken, arg16: PlayFabEntityToken, arg17: MinecraftSession, arg18: MinecraftMultiplayerToken, arg19: MinecraftCertificateChain)
    readonly bedrockXstsToken: Holder<XblXstsToken>;
    readonly changeListeners: ChangeListeners;
    readonly deviceId: UUID;
    readonly deviceKeyPair: KeyPair;
    readonly deviceType: string;
    readonly gameVersion: string;
    readonly httpClient: HttpClient;
    readonly minecraftCertificateChain: Holder<MinecraftCertificateChain>;
    readonly minecraftMultiplayerToken: Holder<MinecraftMultiplayerToken>;
    readonly minecraftSession: Holder<MinecraftSession>;
    readonly msaApplicationConfig: MsaApplicationConfig;
    readonly msaToken: Holder<MsaToken>;
    readonly playFabMasterToken: Holder<PlayFabEntityToken>;
    readonly playFabToken: Holder<PlayFabToken>;
    readonly playFabXstsToken: Holder<XblXstsToken>;
    readonly realmsXstsToken: Holder<XblXstsToken>;
    readonly sessionKeyPair: KeyPair;
    // private sisuTokensLock: Object;
    readonly xblDeviceToken: Holder<XblDeviceToken>;
    readonly xblTitleToken: Holder<XblTitleToken>;
    readonly xblUserToken: Holder<XblUserToken>;
    readonly xboxLiveXstsToken: Holder<XblXstsToken>;
    getBedrockXstsToken(): Holder<XblXstsToken>;
    getChangeListeners(): ChangeListeners;
    getDeviceId(): UUID;
    getDeviceKeyPair(): KeyPair;
    getDeviceType(): string;
    getGameVersion(): string;
    getHttpClient(): HttpClient;
    getMinecraftCertificateChain(): Holder<MinecraftCertificateChain>;
    getMinecraftMultiplayerToken(): Holder<MinecraftMultiplayerToken>;
    getMinecraftSession(): Holder<MinecraftSession>;
    getMsaApplicationConfig(): MsaApplicationConfig;
    getMsaToken(): Holder<MsaToken>;
    getPlayFabMasterToken(): Holder<PlayFabEntityToken>;
    getPlayFabToken(): Holder<PlayFabToken>;
    getPlayFabXstsToken(): Holder<XblXstsToken>;
    getRealmsXstsToken(): Holder<XblXstsToken>;
    getSessionKeyPair(): KeyPair;
    getXblDeviceToken(): Holder<XblDeviceToken>;
    getXblTitleToken(): Holder<XblTitleToken>;
    getXblUserToken(): Holder<XblUserToken>;
    getXboxLiveXstsToken(): Holder<XblXstsToken>;
    // private hookChangeListeners(): void;
    // private refreshBedrockXstsToken(): XblXstsToken;
    // private refreshMinecraftCertificateChain(): MinecraftCertificateChain;
    // private refreshMinecraftMultiplayerToken(): MinecraftMultiplayerToken;
    // private refreshMinecraftSession(): MinecraftSession;
    // private refreshMsaToken(): MsaToken;
    // private refreshPlayFabMasterToken(): PlayFabEntityToken;
    // private refreshPlayFabToken(): PlayFabToken;
    // private refreshPlayFabXstsToken(): XblXstsToken;
    // private refreshRealmsXstsToken(): XblXstsToken;
    // private refreshSisuTokens(): void;
    // private refreshXblDeviceToken(): XblDeviceToken;
    // private refreshXblTitleToken(): XblTitleToken;
    // private refreshXblUserToken(): XblUserToken;
    // private refreshXboxLiveXstsToken(): XblXstsToken;
}
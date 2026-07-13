import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ActivateCapeRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ActivateCapeRequest.d.ts'
import type { BlockList } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/BlockList.d.ts'
import type { ChangeSkinRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ChangeSkinRequest.d.ts'
import type { EntitlementsResponse } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/EntitlementsResponse.d.ts'
import type { FriendsList } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/FriendsList.d.ts'
import type { FriendsUpdateRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/FriendsUpdateRequest.d.ts'
import type { MinecraftAuthResponse } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/MinecraftAuthResponse.d.ts'
import type { NameAvailability } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/NameAvailability.d.ts'
import type { NameChangeInfo } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/NameChangeInfo.d.ts'
import type { PlayerAttributes } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/PlayerAttributes.d.ts'
import type { PlayerAttributesUpdate } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/PlayerAttributesUpdate.d.ts'
import type { PlayerCertificates } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/PlayerCertificates.d.ts'
import type { PlayerProfile } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/PlayerProfile.d.ts'
import type { PresenceRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/PresenceRequest.d.ts'
import type { PresenceResponse } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/PresenceResponse.d.ts'
import type { ProfileIdName } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/ProfileIdName.d.ts'
import type { PublicKeys } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/PublicKeys.d.ts'
import type { MultipartBody$Part } from '../../../../../../okhttp3/MultipartBody$Part.d.ts'
import type { RequestBody } from '../../../../../../okhttp3/RequestBody.d.ts'
import type { Response } from '../../../../../../retrofit2/Response.d.ts'
export interface MinecraftServicesApi extends Object{
    changeName(newName: string): PlayerProfile;
    changeSkin(request: ChangeSkinRequest): PlayerProfile;
    checkEntitlements(requestId: string): Response<EntitlementsResponse>;
    checkGiftCode(): Response<void>;
    checkNameAvailability(name: string): NameAvailability;
    fetchAttributes(): PlayerAttributes;
    fetchProfile(): PlayerProfile;
    getBlockList(): BlockList;
    getCertificates(): PlayerCertificates;
    getFriends(etag: string | null): Response<FriendsList>;
    getNameChangeInfo(): NameChangeInfo;
    getPublicKeys(): PublicKeys;
    hideCape(): PlayerProfile;
    loginWithXbox(identityToken: { [key: string]: string }): MinecraftAuthResponse;
    lookupNameByUuid(uuid: string): ProfileIdName;
    lookupProfilesBulk(names: string[]): ProfileIdName[];
    lookupUuidByName(username: string): ProfileIdName;
    reportPresence(request: PresenceRequest): PresenceResponse;
    resetSkin(): PlayerProfile;
    showCape(request: ActivateCapeRequest): PlayerProfile;
    updateAttributes(update: PlayerAttributesUpdate): PlayerAttributes;
    updateFriend(request: FriendsUpdateRequest): Response<FriendsList>;
    uploadSkin(variant: RequestBody, file: MultipartBody$Part): PlayerProfile;
}
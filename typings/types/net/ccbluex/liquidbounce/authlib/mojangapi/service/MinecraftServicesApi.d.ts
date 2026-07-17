import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
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
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    changeName(newName: string, $completion: Continuation<PlayerProfile>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    changeSkin(request: ChangeSkinRequest, $completion: Continuation<PlayerProfile>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    checkEntitlements(requestId: string, $completion: Continuation<Response<EntitlementsResponse>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    checkGiftCode($completion: Continuation<Response<void>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    checkNameAvailability(name: string, $completion: Continuation<NameAvailability>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fetchAttributes($completion: Continuation<PlayerAttributes>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    fetchProfile($completion: Continuation<PlayerProfile>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getBlockList($completion: Continuation<BlockList>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getCertificates($completion: Continuation<PlayerCertificates>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getFriends(etag: string | null, $completion: Continuation<Response<FriendsList>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getNameChangeInfo($completion: Continuation<NameChangeInfo>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    getPublicKeys($completion: Continuation<PublicKeys>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    hideCape($completion: Continuation<PlayerProfile>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    loginWithXbox(identityToken: { [key: string]: string }, $completion: Continuation<MinecraftAuthResponse>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lookupNameByUuid(uuid: string, $completion: Continuation<ProfileIdName>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lookupProfilesBulk(names: string[], $completion: Continuation<ProfileIdName[]>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    lookupUuidByName(username: string, $completion: Continuation<ProfileIdName>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    reportPresence(request: PresenceRequest, $completion: Continuation<PresenceResponse>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    resetSkin($completion: Continuation<PlayerProfile>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    showCape(request: ActivateCapeRequest, $completion: Continuation<PlayerProfile>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    updateAttributes(update: PlayerAttributesUpdate, $completion: Continuation<PlayerAttributes>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    updateFriend(request: FriendsUpdateRequest, $completion: Continuation<Response<FriendsList>>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    uploadSkin(variant: RequestBody, file: MultipartBody$Part, $completion: Continuation<PlayerProfile>): any;
}
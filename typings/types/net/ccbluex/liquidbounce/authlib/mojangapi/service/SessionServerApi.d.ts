import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JoinServerRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/JoinServerRequest.d.ts'
import type { SessionProfile } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/SessionProfile.d.ts'
import type { Response } from '../../../../../../retrofit2/Response.d.ts'
export interface SessionServerApi extends Object{
    fetchProfile(uuid: string): Response<SessionProfile>;
    fetchProfileSigned(uuid: string, unsigned: boolean): Response<SessionProfile>;
    getBlockedServers(): string;
    hasJoined(username: string, serverId: string, ip: string | null): Response<SessionProfile>;
    joinServer(request: JoinServerRequest): Response<void>;
}
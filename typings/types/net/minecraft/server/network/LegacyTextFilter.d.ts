import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { DedicatedServerProperties } from '../../../../net/minecraft/server/dedicated/DedicatedServerProperties.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
import type { LegacyTextFilter$JoinOrLeaveEncoder } from '../../../../net/minecraft/server/network/LegacyTextFilter$JoinOrLeaveEncoder.d.ts'
import type { ServerTextFilter } from '../../../../net/minecraft/server/network/ServerTextFilter.d.ts'
import type { ServerTextFilter$IgnoreStrategy } from '../../../../net/minecraft/server/network/ServerTextFilter$IgnoreStrategy.d.ts'
import type { ServerTextFilter$MessageEncoder } from '../../../../net/minecraft/server/network/ServerTextFilter$MessageEncoder.d.ts'
import type { TextFilter } from '../../../../net/minecraft/server/network/TextFilter.d.ts'
export class LegacyTextFilter extends ServerTextFilter {
    static createFromConfig(paramconfig: DedicatedServerProperties): ServerTextFilter;
    static createTextFilterFromConfig(paramconfig: string): ServerTextFilter;
    private constructor(chatEndpoint: URL, chatEncoder: (param0: GameProfile, param1: string) => JsonObject, joinEndpoint: URL, joinEncoder: (param0: GameProfile) => JsonObject, leaveEndpoint: URL, leaveEncoder: (param0: GameProfile) => JsonObject, authKey: string, chatIgnoreStrategy: (param0: string, param1: number) => boolean, workerPool: ExecutorService)
    // private authKey: string;
    // private joinEncoder: (param0: GameProfile) => JsonObject;
    // private joinEndpoint: URL;
    // private leaveEncoder: (param0: GameProfile) => JsonObject;
    // private leaveEndpoint: URL;
    createContext(gameProfile: GameProfile): TextFilter;
    filterText(message: string, ignoreStrategy: (param0: string, param1: number) => boolean, result: JsonObject): FilteredText;
    // private processJoinOrLeave(user: GameProfile, endpoint: URL, encoder: (param0: GameProfile) => JsonObject, executor: Executor): void;
    // private processRequest(payload: JsonObject, url: URL): void;
    setAuthorizationProperty(connection: HttpURLConnection): void;
}
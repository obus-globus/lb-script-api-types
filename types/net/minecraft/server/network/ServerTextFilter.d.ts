import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FilterMask } from '../../../../net/minecraft/network/chat/FilterMask.d.ts'
import type { DedicatedServerProperties } from '../../../../net/minecraft/server/dedicated/DedicatedServerProperties.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
import type { ServerTextFilter$IgnoreStrategy } from '../../../../net/minecraft/server/network/ServerTextFilter$IgnoreStrategy.d.ts'
import type { ServerTextFilter$MessageEncoder } from '../../../../net/minecraft/server/network/ServerTextFilter$MessageEncoder.d.ts'
import type { TextFilter } from '../../../../net/minecraft/server/network/TextFilter.d.ts'
export abstract class ServerTextFilter extends Object implements AutoCloseable {
    static createFromConfig(paramconfig: DedicatedServerProperties): ServerTextFilter;
    constructor(chatEndpoint: URL, chatEncoder: (param0: GameProfile, param1: string) => com.google.gson.JsonObject, chatIgnoreStrategy: (param0: string, param1: number) => kotlin.Boolean, workerPool: ExecutorService)
    // private chatEncoder: (param0: GameProfile, param1: string) => com.google.gson.JsonObject;
    // private chatEndpoint: URL;
    // private chatIgnoreStrategy: (param0: string, param1: number) => kotlin.Boolean;
    // private workerPool: ExecutorService;
    close(): void;
    connectionReadTimeout(): number;
    createContext(gameProfile: GameProfile): TextFilter;
    drainStream(input: InputStream): void;
    filterText(message: string, ignoreStrategy: (param0: string, param1: number) => kotlin.Boolean, result: JsonObject): FilteredText;
    getURLConnection(url: URL): HttpURLConnection;
    makeRequest(payload: JsonObject, url: URL): HttpURLConnection;
    parseMask(message: string, removedChars: JsonElement[], ignoreStrategy: (param0: string, param1: number) => kotlin.Boolean): FilterMask;
    // private processRequestResponse(payload: JsonObject, url: URL): JsonObject;
    requestMessageProcessing(sender: GameProfile, message: string, ignoreStrategy: (param0: string, param1: number) => kotlin.Boolean, executor: Executor): CompletableFuture<FilteredText>;
    setAuthorizationProperty(connection: HttpURLConnection): void;
}
import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { AxochatPacket$C2S } from '../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
import type { AxochatPacket$S2C } from '../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
import type { PacketDeserializer } from '../../../../../net/ccbluex/liquidbounce/features/chat/packet/PacketDeserializer.d.ts'
import type { PacketSerializer } from '../../../../../net/ccbluex/liquidbounce/features/chat/packet/PacketSerializer.d.ts'
import type { S2CErrorPacket } from '../../../../../net/ccbluex/liquidbounce/features/chat/packet/S2CErrorPacket.d.ts'
export class AxochatClient extends Object {
    constructor()
    // private channel: Channel | null;
    // private deserializer: PacketDeserializer;
    // private deserializerGson: Gson;
    // private /*not mapped: */ getDeserializerGson(): Gson;
    /*not mapped: */ isConnected(): boolean;
    // private isConnecting: boolean;
    // private isLoggedIn: boolean;
    /*not mapped: */ isLoggedIn(): boolean;
    // private serializer: PacketSerializer;
    // private serializerGson: Gson;
    // private /*not mapped: */ getSerializerGson(): Gson;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    banUser(target: string, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    connect($completion: Continuation<Result<void>>): any;
    disconnect(): void;
    // private handleFunctionalPacket(packet: AxochatPacket$S2C): void;
    /**
     * Handle incoming message of websocket
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L348 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:348}
     */
    handlePlainMessage(message: string): void;
    /**
     * Login to web socket via JWT
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L252 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:252}
     */
    loginViaJwt(token: string): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    reconnect($completion: Continuation<void>): any;
    /**
     * Request Mojang authentication details for login
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L212 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:212}
     */
    requestMojangLogin(): void;
    /**
     * Send chat message to server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L217 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:217}
     */
    sendMessage(message: string): void;
    /**
     * Send packet to server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L260 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:260}
     */
    sendPacket(packet: AxochatPacket$C2S): void;
    /**
     * Send private chat message to server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L222 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:222}
     */
    sendPrivateMessage(receiver: string, message: string): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private toUUID(target: string, $completion: Continuation<string>): any;
    // private translateErrorMessage(packet: S2CErrorPacket): string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    unbanUser(target: string, $completion: Continuation<void>): any;
}
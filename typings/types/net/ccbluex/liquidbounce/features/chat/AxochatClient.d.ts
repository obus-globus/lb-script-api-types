import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../kotlin/Result.d.ts'
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
    /**
     * Ban user from server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L229 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:229}
     */
    banUser(target: string): void;
    /**
     * Connect to chat server via websocket.
     * Supports SSL and non-SSL connections.
     * Be aware SSL takes insecure certificates.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L128 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:128}
     */
    connect(): Result<void>;
    disconnect(): void;
    // private handleFunctionalPacket(packet: AxochatPacket$S2C): void;
    /**
     * Handle incoming message of websocket
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L349 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:349}
     */
    handlePlainMessage(message: string): void;
    /**
     * Login to web socket via JWT
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L253 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:253}
     */
    loginViaJwt(token: string): void;
    reconnect(): void;
    /**
     * Request Mojang authentication details for login
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L213 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:213}
     */
    requestMojangLogin(): void;
    /**
     * Send chat message to server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L218 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:218}
     */
    sendMessage(message: string): void;
    /**
     * Send packet to server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L261 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:261}
     */
    sendPacket(packet: AxochatPacket$C2S): void;
    /**
     * Send private chat message to server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L223 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:223}
     */
    sendPrivateMessage(receiver: string, message: string): void;
    // private toUUID(target: string): string;
    // private translateErrorMessage(packet: S2CErrorPacket): string;
    /**
     * Unban user from server
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L234 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:234}
     */
    unbanUser(target: string): void;
}
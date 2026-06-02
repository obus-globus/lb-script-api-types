import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerStatus$Favicon } from '../../../../../net/minecraft/network/protocol/status/ServerStatus$Favicon.d.ts'
import type { ServerStatus$Players } from '../../../../../net/minecraft/network/protocol/status/ServerStatus$Players.d.ts'
import type { ServerStatus$Version } from '../../../../../net/minecraft/network/protocol/status/ServerStatus$Version.d.ts'
export class ServerStatus extends Record {
    static CODEC: Codec<ServerStatus>;
    // private description: Component;
    // private enforcesSecureChat: boolean;
    // private favicon: Optional<ServerStatus$Favicon>;
    // private players: Optional<ServerStatus$Players>;
    // private version: Optional<ServerStatus$Version>;
    description(): Component;
    enforcesSecureChat(): boolean;
    equals(o: Object | null): boolean;
    favicon(): Optional<ServerStatus$Favicon>;
    hashCode(): number;
    players(): Optional<ServerStatus$Players>;
    toString(): string;
    version(): Optional<ServerStatus$Version>;
}
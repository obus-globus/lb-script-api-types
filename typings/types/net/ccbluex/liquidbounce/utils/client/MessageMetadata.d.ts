import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientModule } from '../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { MessageMetadata$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/client/MessageMetadata$Companion.d.ts'
/**
 * Stores some data used to construct messages.
 * The {@link id}, when the message is sent from a client object,
 * should follow the pattern `ObjectName#UniqueString`
 * to avoid duplicates.
 *
 * This would mean, for example, that a not-in-game exception should
 * from a command named `SomeCommand` with should have the
 * id `SomeCommand#notIngame`.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientChat.kt#L184 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientChat.kt:184}
 */
export class MessageMetadata extends Record {
    static Companion: MessageMetadata$Companion;
    static byModule(module: ClientModule): MessageMetadata;
    constructor(prefix: boolean, id: string | null, remove: boolean, count: number)
    // private count: number;
    /*not mapped: */ count(): number;
    // private id: string | null;
    /*not mapped: */ id(): string | null;
    // private prefix: boolean;
    /*not mapped: */ prefix(): boolean;
    // private remove: boolean;
    /*not mapped: */ remove(): boolean;
    component1(): boolean;
    component2(): string | null;
    component3(): boolean;
    component4(): number;
    copy(prefix: boolean, id: string | null, remove: boolean, count: number): MessageMetadata;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
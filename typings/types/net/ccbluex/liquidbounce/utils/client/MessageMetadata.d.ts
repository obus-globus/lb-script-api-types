import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientChat.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ClientChat.kt:185}
 */
export class MessageMetadata extends Record {
    static Companion: MessageMetadata$Companion;
    static byCommand(command: Command): MessageMetadata;
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
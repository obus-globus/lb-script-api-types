import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
import type { ServerTextFilter } from '../../../../net/minecraft/server/network/ServerTextFilter.d.ts'
import type { TextFilter } from '../../../../net/minecraft/server/network/TextFilter.d.ts'
export class ServerTextFilter$PlayerContext extends Object implements TextFilter {
    static DUMMY: TextFilter;
    constructor(null_: ServerTextFilter, profile: GameProfile)
    // private profile: GameProfile;
    // private streamExecutor: Executor;
    join(): void;
    leave(): void;
    processMessageBundle(messages: string[]): CompletableFuture<FilteredText[]>;
    processStreamMessage(message: string): CompletableFuture<FilteredText>;
}
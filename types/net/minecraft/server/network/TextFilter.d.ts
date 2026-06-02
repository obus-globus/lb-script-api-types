import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
export interface TextFilter extends Object{
    join(): void;
    leave(): void;
    processMessageBundle(messages: string[]): CompletableFuture<FilteredText[]>;
    processStreamMessage(message: string): CompletableFuture<FilteredText>;
}
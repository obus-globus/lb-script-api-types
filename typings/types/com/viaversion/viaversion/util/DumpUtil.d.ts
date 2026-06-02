import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DumpUtil extends Object {
    static postDump(paramarg0: UUID): CompletableFuture<string>;
    static urlForId(paramarg0: string): string;
    constructor()
}
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlobCache extends StoredObject {
    constructor(arg0: UserConnection)
    // private acked: (Object | null)[];
    // private missing: (Object | null)[];
    // private pending: { [key: string]: any };
    addBlob(arg0: number, arg1: number[]): void;
    getBlob(arg0: number[]): CompletableFuture<number[]>;
    getBlob(arg0: boolean, arg1: number[]): CompletableFuture<number[]>;
    hasBlob(arg0: number[]): boolean;
    tick(): void;
}
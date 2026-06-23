import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { AsynchronousChannel } from '../../../java/nio/channels/AsynchronousChannel.d.ts'
import type { CompletionHandler } from '../../../java/nio/channels/CompletionHandler.d.ts'
import type { FileLock } from '../../../java/nio/channels/FileLock.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { ExecutorService } from '../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AsynchronousFileChannel extends Object implements AsynchronousChannel {
    static open(paramarg0: Path[][], paramarg1: (Object | null)[]): AsynchronousFileChannel;
    static open(paramarg0: Path[][], paramarg1: OpenOption[], paramarg2: ExecutorService, paramarg3: Object | null): AsynchronousFileChannel;
    constructor()
    close(): void;
    force(arg0: boolean): void;
    isOpen(): boolean;
    lock(): Future<FileLock>;
    lock<A extends Object | number | string | boolean>(arg0: A, arg1: CompletionHandler<FileLock, A>): void;
    lock(arg0: number, arg1: number, arg2: boolean): Future<FileLock>;
    lock<A extends Object | number | string | boolean>(arg0: number, arg1: number, arg2: boolean, arg3: A, arg4: CompletionHandler<FileLock, A>): void;
    read(arg0: ByteBuffer, arg1: number): Future<number>;
    read<A extends Object | number | string | boolean>(arg0: ByteBuffer, arg1: number, arg2: A, arg3: CompletionHandler<number, A>): void;
    size(): number;
    truncate(arg0: number): AsynchronousFileChannel;
    tryLock(): FileLock;
    tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;
    write(arg0: ByteBuffer, arg1: number): Future<number>;
    write<A extends Object | number | string | boolean>(arg0: ByteBuffer, arg1: number, arg2: A, arg3: CompletionHandler<number, A>): void;
}
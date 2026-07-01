import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { PhantomCleanable } from '../../jdk/internal/ref/PhantomCleanable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FileDescriptor extends Object {
    static err: FileDescriptor;
    static in: FileDescriptor;
    static out: FileDescriptor;
    constructor()
    // private append: boolean;
    // private cleanup: PhantomCleanable<FileDescriptor>;
    // private closed: boolean;
    // private fd: number;
    // private handle: number;
    // private otherParents: Closeable[];
    // private parent: Closeable;
    attach(arg0: Closeable): void;
    close(): void;
    // private close0(): void;
    closeAll(arg0: Closeable): void;
    registerCleanup(arg0: PhantomCleanable<FileDescriptor>): void;
    set(arg0: number): void;
    setHandle(arg0: number): void;
    sync(): void;
    // private sync0(): void;
    unregisterCleanup(): void;
    valid(): boolean;
}
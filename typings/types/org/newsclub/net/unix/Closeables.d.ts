import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Closeables extends Object implements Closeable {
    constructor()
    constructor(...arg0: Closeable[])
    readonly closed: boolean;
    // private list: WeakReference<Closeable>[];
    add(arg0: Closeable): boolean;
    add(arg0: WeakReference<Closeable>): boolean;
    close(): void;
    close(arg0: IOException): void;
    isClosed(): boolean;
    remove(arg0: Closeable): boolean;
}
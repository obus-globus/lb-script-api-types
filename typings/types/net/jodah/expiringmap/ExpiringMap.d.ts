import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ThreadFactory } from '../../../java/util/concurrent/ThreadFactory.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ExpiringMap$Builder } from '../../../net/jodah/expiringmap/ExpiringMap$Builder.d.ts'
export class ExpiringMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder(): ExpiringMap$Builder<Object, Object>;
    static create<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static setThreadFactory(paramarg0: ThreadFactory): void;
}
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EntryLoader } from '../../../net/jodah/expiringmap/EntryLoader.d.ts'
import type { ExpirationListener } from '../../../net/jodah/expiringmap/ExpirationListener.d.ts'
import type { ExpirationPolicy } from '../../../net/jodah/expiringmap/ExpirationPolicy.d.ts'
import type { ExpiringEntryLoader } from '../../../net/jodah/expiringmap/ExpiringEntryLoader.d.ts'
export class ExpiringMap$Builder<K extends unknown, V extends unknown> extends Object {
    private constructor()
    // private asyncExpirationListeners: ExpirationListener<K, V>[];
    // private duration: number;
    // private entryLoader: EntryLoader<K, V>;
    // private expirationListeners: ExpirationListener<K, V>[];
    // private expirationPolicy: ExpirationPolicy;
    // private expiringEntryLoader: ExpiringEntryLoader<K, V>;
    // private maxSize: number;
    // private timeUnit: TimeUnit;
    // private variableExpiration: boolean;
    // private assertNoLoaderSet(): void;
    asyncExpirationListener<K1 extends K, V1 extends V>(arg0: ExpirationListener<K1, V1>): ExpiringMap$Builder<K1, V1>;
    asyncExpirationListeners<K1 extends K, V1 extends V>(arg0: ExpirationListener<K1, V1>[]): ExpiringMap$Builder<K1, V1>;
    build<K1 extends K, V1 extends V>(): Map<K1, V1>;
    entryLoader<K1 extends K, V1 extends V>(arg0: EntryLoader<K1, V1>): ExpiringMap$Builder<K1, V1>;
    expiration(arg0: number, arg1: TimeUnit): ExpiringMap$Builder<K, V>;
    expirationListener<K1 extends K, V1 extends V>(arg0: ExpirationListener<K1, V1>): ExpiringMap$Builder<K1, V1>;
    expirationListeners<K1 extends K, V1 extends V>(arg0: ExpirationListener<K1, V1>[]): ExpiringMap$Builder<K1, V1>;
    expirationPolicy(arg0: ExpirationPolicy): ExpiringMap$Builder<K, V>;
    expiringEntryLoader<K1 extends K, V1 extends V>(arg0: ExpiringEntryLoader<K1, V1>): ExpiringMap$Builder<K1, V1>;
    maxSize(arg0: number): ExpiringMap$Builder<K, V>;
    variableExpiration(): ExpiringMap$Builder<K, V>;
}
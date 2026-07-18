import type { ConnectionOptions } from '../../../../io/ktor/http/cio/ConnectionOptions.d.ts'
import type { AsciiCharTree } from '../../../../io/ktor/http/cio/internals/AsciiCharTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
export class ConnectionOptions$Companion extends Object {
    // private Close: ConnectionOptions;
    /*not mapped: */ getClose(): ConnectionOptions;
    // private KeepAlive: ConnectionOptions;
    /*not mapped: */ getKeepAlive(): ConnectionOptions;
    // private Upgrade: ConnectionOptions;
    /*not mapped: */ getUpgrade(): ConnectionOptions;
    // private knownTypes: AsciiCharTree<Pair<string, ConnectionOptions>>;
    parse(connection: CharSequence | null): ConnectionOptions | null;
    // private parseSlow(connection: CharSequence): ConnectionOptions;
}
import type { HostsFileEntries } from '../../../io/netty/resolver/HostsFileEntries.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HostsFileParser extends Object {
    static parse(): HostsFileEntries;
    static parse(paramarg0: File): HostsFileEntries;
    static parse(paramarg0: File, paramarg1: (Object | null)[]): HostsFileEntries;
    static parse(paramarg0: Reader): HostsFileEntries;
    static parseSilently(): HostsFileEntries;
    static parseSilently(paramarg0: (Object | null)[]): HostsFileEntries;
    private constructor()
}
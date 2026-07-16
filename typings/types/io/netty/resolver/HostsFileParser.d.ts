import type { HostsFileEntries } from '../../../io/netty/resolver/HostsFileEntries.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HostsFileParser extends Object {
    static parse(): HostsFileEntries;
    static parse(paramarg0: File): HostsFileEntries;
    static parse(paramarg0: File, ...paramarg1: Charset[]): HostsFileEntries;
    static parse(paramarg0: Reader): HostsFileEntries;
    static parseSilently(): HostsFileEntries;
    static parseSilently(...paramarg0: Charset[]): HostsFileEntries;
    private constructor()
}
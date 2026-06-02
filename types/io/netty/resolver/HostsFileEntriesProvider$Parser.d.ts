import type { HostsFileEntriesProvider } from '../../../io/netty/resolver/HostsFileEntriesProvider.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HostsFileEntriesProvider$Parser extends Object{
    parse(): HostsFileEntriesProvider;
    parse(arg0: File, arg1: Charset[]): HostsFileEntriesProvider;
    parse(arg0: Reader): HostsFileEntriesProvider;
    parse(arg0: Charset[]): HostsFileEntriesProvider;
    parseSilently(): HostsFileEntriesProvider;
    parseSilently(arg0: File, arg1: Charset[]): HostsFileEntriesProvider;
    parseSilently(arg0: Charset[]): HostsFileEntriesProvider;
}
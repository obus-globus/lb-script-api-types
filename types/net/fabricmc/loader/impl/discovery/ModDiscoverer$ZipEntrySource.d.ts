import type { ZipEntry } from '../../../../../java/util/zip/ZipEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModDiscoverer$RewindableInputStream } from '../../../../../net/fabricmc/loader/impl/discovery/ModDiscoverer$RewindableInputStream.d.ts'
export interface ModDiscoverer$ZipEntrySource extends Object{
    getInputStream(): ModDiscoverer$RewindableInputStream;
    getNextEntry(): ZipEntry;
}
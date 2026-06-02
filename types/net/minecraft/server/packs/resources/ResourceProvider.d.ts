import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export interface ResourceProvider extends Object{
    getResource(location: Identifier): Optional<Resource>;
    getResourceOrThrow(location: Identifier): Resource;
    open(location: Identifier): InputStream;
    openAsReader(location: Identifier): BufferedReader;
}
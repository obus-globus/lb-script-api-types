import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceProvider } from '../../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class ShaderCreator$IrisProgramResourceFactory extends Record implements ResourceProvider {
    static EMPTY: (param0: Identifier) => Optional<Resource>;
    private constructor(json: string, vertex: string, geometry: string, tessControl: string, tessEval: string, fragment: string)
    // private fragment: string;
    // private geometry: string;
    // private json: string;
    // private tessControl: string;
    // private tessEval: string;
    // private vertex: string;
    equals(arg0: Object | null): boolean;
    fragment(): string;
    geometry(): string;
    getResource(arg0: Identifier): Optional<Resource>;
    getResourceOrThrow(location: Identifier): Resource;
    hashCode(): number;
    json(): string;
    open(location: Identifier): InputStream;
    openAsReader(location: Identifier): BufferedReader;
    tessControl(): string;
    tessEval(): string;
    toString(): string;
    vertex(): string;
}
import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Artifact$Item } from '../../../ai/djl/repository/Artifact$Item.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { Version } from '../../../ai/djl/repository/Version.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Artifact extends Object {
    constructor()
    readonly arguments: JavaMap<string, Object>;
    // private cache: Version;
    readonly files: JavaMap<string, Artifact$Item>;
    readonly metadata: Metadata;
    readonly metadataVersion: string;
    readonly name: string;
    readonly options: JavaMap<string, string>;
    readonly properties: JavaMap<string, string>;
    readonly snapshot: boolean;
    readonly version: string;
    getArguments(): JavaMap<string, Object>;
    getArguments(arg0: JavaMap<string, Object>): JavaMap<string, Object>;
    getFiles(): JavaMap<string, Artifact$Item>;
    getMetadata(): Metadata;
    getMetadataVersion(): string;
    getName(): string;
    getOptions(arg0: JavaMap<string, string>): JavaMap<string, string>;
    getParsedVersion(): Version;
    getProperties(): JavaMap<string, string>;
    getResourceUri(): URI;
    getVersion(): string;
    hasProperties(arg0: JavaMap<string, string>): boolean;
    isSnapshot(): boolean;
    setArguments(arg0: JavaMap<string, Object>): void;
    setFiles(arg0: JavaMap<string, Artifact$Item>): void;
    setMetadata(arg0: Metadata): void;
    setMetadataVersion(arg0: string): void;
    setName(arg0: string): void;
    setOptions(arg0: JavaMap<string, string>): void;
    setProperties(arg0: JavaMap<string, string>): void;
    setSnapshot(arg0: boolean): void;
    setVersion(arg0: string): void;
    toString(): string;
}
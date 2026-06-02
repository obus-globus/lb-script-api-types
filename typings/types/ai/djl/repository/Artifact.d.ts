import type { Artifact$Item } from '../../../ai/djl/repository/Artifact$Item.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { Version } from '../../../ai/djl/repository/Version.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Artifact extends Object {
    constructor()
    readonly arguments: { [key: string]: Object };
    // private cache: Version;
    readonly files: { [key: string]: Artifact$Item };
    readonly metadata: Metadata;
    readonly metadataVersion: string;
    readonly name: string;
    readonly options: { [key: string]: string };
    readonly properties: { [key: string]: string };
    readonly snapshot: boolean;
    readonly version: string;
    getArguments(): { [key: string]: Object };
    getArguments(arg0: { [key: string]: Object }): { [key: string]: Object };
    getFiles(): { [key: string]: Artifact$Item };
    getMetadata(): Metadata;
    getMetadataVersion(): string;
    getName(): string;
    getOptions(arg0: { [key: string]: string }): { [key: string]: string };
    getParsedVersion(): Version;
    getProperties(): { [key: string]: string };
    getResourceUri(): URI;
    getVersion(): string;
    hasProperties(arg0: { [key: string]: string }): boolean;
    isSnapshot(): boolean;
    setArguments(arg0: { [key: string]: Object }): void;
    setFiles(arg0: { [key: string]: Artifact$Item }): void;
    setMetadata(arg0: Metadata): void;
    setMetadataVersion(arg0: string): void;
    setName(arg0: string): void;
    setOptions(arg0: { [key: string]: string }): void;
    setProperties(arg0: { [key: string]: string }): void;
    setSnapshot(arg0: boolean): void;
    setVersion(arg0: string): void;
    toString(): string;
}
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Artifact$Item extends Object {
    constructor()
    readonly artifact: Artifact;
    readonly extension: string;
    readonly name: string;
    readonly sha1Hash: string;
    readonly size: number;
    readonly type: string;
    readonly uri: string;
    getArtifact(): Artifact;
    getExtension(): string;
    getName(): string;
    getSha1Hash(): string;
    getSize(): number;
    getType(): string;
    getUri(): string;
    setArtifact(arg0: Artifact): void;
    setExtension(arg0: string): void;
    setName(arg0: string): void;
    setSha1Hash(arg0: string): void;
    setSize(arg0: number): void;
    setType(arg0: string): void;
    setUri(arg0: string): void;
}
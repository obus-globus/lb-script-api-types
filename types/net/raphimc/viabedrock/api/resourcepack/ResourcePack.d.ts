import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourcePack$Key } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack$Key.d.ts'
import type { Content } from '../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content.d.ts'
export class ResourcePack extends Object {
    constructor(arg0: Content)
    // private content: Content;
    // private key: ResourcePack$Key;
    // private name: string;
    content(): Content;
    decryptContent(arg0: number[], arg1: string): void;
    id(): UUID;
    isContentEncrypted(): boolean;
    key(): ResourcePack$Key;
    name(): string;
    version(): string;
}
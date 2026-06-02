import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourcePack$Key } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack$Key.d.ts'
export class ResourcePackLoadStateTracker$Info extends Record {
    // private contentId: string;
    // private contentKey: number[];
    // private httpUrl: URL;
    // private key: ResourcePack$Key;
    contentId(): string;
    contentKey(): number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    httpUrl(): URL;
    key(): ResourcePack$Key;
    toString(): string;
}
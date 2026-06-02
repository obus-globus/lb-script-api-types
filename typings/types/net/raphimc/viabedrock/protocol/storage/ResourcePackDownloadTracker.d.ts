import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/PackType.d.ts'
import type { ResourcePackDownloadTracker$Download } from '../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackDownloadTracker$Download.d.ts'
export class ResourcePackDownloadTracker extends Object implements StorableObject {
    constructor()
    // private downloads: { [key: string]: ResourcePackDownloadTracker$Download };
    add(arg0: string, arg1: number, arg2: number, arg3: number[], arg4: boolean, arg5: PackType): ResourcePackDownloadTracker$Download;
    get(arg0: string): ResourcePackDownloadTracker$Download;
    onRemove(): void;
    remove(arg0: string): void;
}
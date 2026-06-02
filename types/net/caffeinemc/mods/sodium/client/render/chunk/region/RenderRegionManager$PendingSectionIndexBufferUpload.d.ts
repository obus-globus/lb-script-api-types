import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PendingUpload } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/PendingUpload.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
export class RenderRegionManager$PendingSectionIndexBufferUpload extends Record {
    private constructor(section: RenderSection, indexBufferUpload: PendingUpload)
    // private indexBufferUpload: PendingUpload;
    // private section: RenderSection;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    indexBufferUpload(): PendingUpload;
    section(): RenderSection;
    toString(): string;
}
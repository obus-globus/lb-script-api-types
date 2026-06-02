import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { KeyMappings } from '../../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BannerPatternStorage extends Object implements StorableObject {
    constructor()
    readonly bannerPatterns: KeyMappings;
    bannerPatterns(): KeyMappings;
    onRemove(): void;
    pattern(arg0: number): string;
    setBannerPatterns(arg0: KeyMappings): void;
}
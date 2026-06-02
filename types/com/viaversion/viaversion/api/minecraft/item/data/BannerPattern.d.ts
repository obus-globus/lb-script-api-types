import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BannerPattern extends Record {
    static TYPE: HolderType<BannerPattern>;
    constructor(assetId: string, translationKey: string)
    // private assetId: string;
    // private translationKey: string;
    assetId(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    translationKey(): string;
}
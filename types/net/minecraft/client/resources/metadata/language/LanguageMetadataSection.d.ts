import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LanguageInfo } from '../../../../../../net/minecraft/client/resources/language/LanguageInfo.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class LanguageMetadataSection extends Record {
    static CODEC: Codec<LanguageMetadataSection>;
    static LANGUAGE_CODE_CODEC: Codec<string>;
    static TYPE: MetadataSectionType<LanguageMetadataSection>;
    constructor(languages: { [key: string]: LanguageInfo })
    // private languages: { [key: string]: LanguageInfo };
    equals(o: Object | null): boolean;
    hashCode(): number;
    languages(): { [key: string]: LanguageInfo };
    toString(): string;
}
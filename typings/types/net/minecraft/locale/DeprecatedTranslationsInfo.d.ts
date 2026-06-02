import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DeprecatedTranslationsInfo extends Record {
    static CODEC: Codec<DeprecatedTranslationsInfo>;
    static EMPTY: DeprecatedTranslationsInfo;
    static loadFromDefaultResource(): DeprecatedTranslationsInfo;
    static loadFromJson(paramstream: InputStream): DeprecatedTranslationsInfo;
    static loadFromResource(parampath: string): DeprecatedTranslationsInfo;
    constructor(removed: string[], renamed: { [key: string]: string })
    // private removed: string[];
    // private renamed: { [key: string]: string };
    applyToMap(translations: { [key: string]: string }): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    removed(): string[];
    renamed(): { [key: string]: string };
    toString(): string;
}
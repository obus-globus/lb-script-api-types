import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TikaCoreProperties$EmbeddedResourceType extends Enum<TikaCoreProperties$EmbeddedResourceType> {
    static ALTERNATE_FORMAT_CHUNK: TikaCoreProperties$EmbeddedResourceType;
    static ATTACHMENT: TikaCoreProperties$EmbeddedResourceType;
    static FONT: TikaCoreProperties$EmbeddedResourceType;
    static INLINE: TikaCoreProperties$EmbeddedResourceType;
    static MACRO: TikaCoreProperties$EmbeddedResourceType;
    static METADATA: TikaCoreProperties$EmbeddedResourceType;
    static RENDERING: TikaCoreProperties$EmbeddedResourceType;
    static THUMBNAIL: TikaCoreProperties$EmbeddedResourceType;
    static VERSION: TikaCoreProperties$EmbeddedResourceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TikaCoreProperties$EmbeddedResourceType;
    static values(): TikaCoreProperties$EmbeddedResourceType[];
    private constructor()
    name(): "INLINE" | "ATTACHMENT" | "MACRO" | "METADATA" | "FONT" | "THUMBNAIL" | "RENDERING" | "VERSION" | "ALTERNATE_FORMAT_CHUNK";
}
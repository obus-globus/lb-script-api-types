import type { Object } from '../java/lang/Object.d.ts'
import type { Regex } from '../kotlin/text/Regex.d.ts'
import type { MediaType } from '../okhttp3/MediaType.d.ts'
export class MediaType$Companion extends Object {
    // private PARAMETER: Regex;
    // private QUOTED: string;
    // private TOKEN: string;
    // private TYPE_SUBTYPE: Regex;
    get(mediaType: string): MediaType;
    parse(mediaType: string): MediaType | null;
}
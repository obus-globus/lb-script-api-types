import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { MediaType$Companion } from '../okhttp3/MediaType$Companion.d.ts'
export class MediaType extends Object {
    static Companion: MediaType$Companion;
    static get(self: string): MediaType;
    static parse(self: string): MediaType | null;
    constructor(mediaType: string, type: string, subtype: string, parameterNamesAndValues: string[])
    // private mediaType: string;
    /*not mapped: */ getMediaType$okhttp(): string;
    // private parameterNamesAndValues: string[];
    // private subtype: string;
    subtype(): string;
    // private type: string;
    type(): string;
    charset(defaultValue?: Charset | null): Charset | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    parameter(name: string): string | null;
    subtype(): string;
    toString(): string;
    type(): string;
}
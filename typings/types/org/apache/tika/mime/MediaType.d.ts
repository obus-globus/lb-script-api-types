import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class MediaType extends Object implements Serializable, Comparable<MediaType> {
    static APPLICATION_XML: MediaType;
    static APPLICATION_ZIP: MediaType;
    static EMPTY: MediaType;
    static OCTET_STREAM: MediaType;
    static TEXT_HTML: MediaType;
    static TEXT_PLAIN: MediaType;
    static application(paramarg0: string): MediaType;
    static audio(paramarg0: string): MediaType;
    static image(paramarg0: string): MediaType;
    static parse(paramarg0: string): MediaType;
    static set(paramarg0: (Object | null)[]): MediaType[];
    static set(paramarg0: (Object | null)[]): MediaType[];
    static text(paramarg0: string): MediaType;
    static video(paramarg0: string): MediaType;
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: { [key: string]: string })
    constructor(arg0: MediaType, arg1: Charset)
    constructor(arg0: MediaType, arg1: string, arg2: string)
    constructor(arg0: MediaType, arg1: { [key: string]: string })
    readonly parameters: { [key: string]: string };
    // private semicolon: number;
    // private slash: number;
    // private string: string;
    compareTo(arg0: MediaType): number;
    equals(arg0: Object | null): boolean;
    getBaseType(): MediaType;
    getParameters(): { [key: string]: string };
    getSubtype(): string;
    getType(): string;
    hasParameters(): boolean;
    hashCode(): number;
    toString(): string;
}
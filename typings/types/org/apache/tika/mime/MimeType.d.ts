import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Magic } from '../../../../org/apache/tika/mime/Magic.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
import type { MimeType$RootXML } from '../../../../org/apache/tika/mime/MimeType$RootXML.d.ts'
export class MimeType extends Object implements Serializable, Comparable<MimeType> {
    static isValid(paramarg0: string): boolean;
    constructor(arg0: MediaType)
    readonly acronym: string;
    readonly description: string;
    readonly extensions: string[];
    // private isInterpreted: boolean;
    readonly links: URI[];
    // private magics: Magic[];
    // private minLength: number;
    // private rootXML: MimeType$RootXML[];
    readonly type: MediaType;
    // private uti: string;
    addExtension(arg0: string): void;
    addLink(arg0: URI): void;
    addMagic(arg0: Magic): void;
    addRootXML(arg0: string, arg1: string): void;
    compareTo(arg0: MimeType): number;
    equals(arg0: Object | null): boolean;
    getAcronym(): string;
    getDescription(): string;
    getExtension(): string;
    getExtensions(): string[];
    getLinks(): URI[];
    getMagics(): Magic[];
    getMinLength(): number;
    getName(): string;
    getType(): MediaType;
    getUniformTypeIdentifier(): string;
    hasMagic(): boolean;
    hasRootXML(): boolean;
    hashCode(): number;
    isInterpreted(): boolean;
    matches(arg0: number[]): boolean;
    matchesMagic(arg0: number[]): boolean;
    matchesXML(arg0: string, arg1: string): boolean;
    setAcronym(arg0: string): void;
    setDescription(arg0: string): void;
    setInterpreted(arg0: boolean): void;
    setUniformTypeIdentifier(arg0: string): void;
    toString(): string;
}
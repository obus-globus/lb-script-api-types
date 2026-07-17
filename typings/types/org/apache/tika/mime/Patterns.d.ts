import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MediaTypeRegistry } from '../../../../org/apache/tika/mime/MediaTypeRegistry.d.ts'
import type { MimeType } from '../../../../org/apache/tika/mime/MimeType.d.ts'
export class Patterns extends Object implements Serializable {
    constructor(arg0: MediaTypeRegistry)
    // private extensions: JavaMap<string, MimeType>;
    // private globs: JavaMap<string, MimeType>;
    // private maxExtensionLength: number;
    // private minExtensionLength: number;
    // private names: JavaMap<string, MimeType>;
    // private registry: MediaTypeRegistry;
    add(arg0: string, arg1: boolean, arg2: MimeType): void;
    add(arg0: string, arg1: MimeType): void;
    // private addExtension(arg0: string, arg1: MimeType): void;
    // private addGlob(arg0: string, arg1: MimeType): void;
    // private addName(arg0: string, arg1: MimeType): void;
    // private compile(arg0: string): string;
    matches(arg0: string): MimeType;
}
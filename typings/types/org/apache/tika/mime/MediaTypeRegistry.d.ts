import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MediaType } from '../../../../org/apache/tika/mime/MediaType.d.ts'
export class MediaTypeRegistry extends Object implements Serializable {
    static getDefaultRegistry(): MediaTypeRegistry;
    constructor()
    // private inheritance: JavaMap<MediaType, MediaType>;
    // private registry: JavaMap<MediaType, MediaType>;
    addAlias(arg0: MediaType, arg1: MediaType): void;
    addSuperType(arg0: MediaType, arg1: MediaType): void;
    addType(arg0: MediaType): void;
    getAliases(arg0: MediaType): MediaType[];
    getChildTypes(arg0: MediaType): MediaType[];
    getSupertype(arg0: MediaType): MediaType;
    getTypes(): MediaType[];
    isInstanceOf(arg0: string, arg1: MediaType): boolean;
    isInstanceOf(arg0: MediaType, arg1: MediaType): boolean;
    isSpecializationOf(arg0: MediaType, arg1: MediaType): boolean;
    normalize(arg0: MediaType): MediaType;
}
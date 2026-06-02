import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Content$LazyImage } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/Content$LazyImage.d.ts'
export abstract class Content extends Object {
    constructor()
    // private langCache: { [key: string]: { [key: string]: string } };
    contains(arg0: string): boolean;
    copyFrom(arg0: Content, arg1: string, arg2: string): void;
    get(arg0: string): number[];
    getFilesDeep(arg0: string, arg1: string): string[];
    getFilesShallow(arg0: string, arg1: string): string[];
    getFullPath(arg0: string, arg1: string[]): string;
    getImage(arg0: string): Content$LazyImage;
    getJson(arg0: string): JsonObject;
    getLang(arg0: string): { [key: string]: string };
    getLines(arg0: string): string[];
    getShortnameImage(arg0: string): Content$LazyImage;
    getSortedJson(arg0: string): JsonObject;
    getString(arg0: string): string;
    put(arg0: string, arg1: number[]): boolean;
    putJson(arg0: string, arg1: JsonObject): boolean;
    putLines(arg0: string, arg1: string[]): boolean;
    putPngImage(arg0: string, arg1: BufferedImage): boolean;
    putPngImage(arg0: string, arg1: Content$LazyImage): boolean;
    putString(arg0: string, arg1: string): boolean;
    toZip(): number[];
}
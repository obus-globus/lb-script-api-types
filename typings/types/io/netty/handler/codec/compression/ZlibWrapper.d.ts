import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ZlibWrapper extends Enum<ZlibWrapper> {
    static GZIP: ZlibWrapper;
    static NONE: ZlibWrapper;
    static ZLIB: ZlibWrapper;
    static ZLIB_OR_NONE: ZlibWrapper;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ZlibWrapper;
    static values(): ZlibWrapper[];
    private constructor()
    name(): "ZLIB" | "GZIP" | "NONE" | "ZLIB_OR_NONE";
}
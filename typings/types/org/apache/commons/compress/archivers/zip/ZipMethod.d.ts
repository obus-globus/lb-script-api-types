import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ZipMethod extends Enum<ZipMethod> {
    static AES_ENCRYPTED: ZipMethod;
    static BZIP2: ZipMethod;
    static DEFLATED: ZipMethod;
    static ENHANCED_DEFLATED: ZipMethod;
    static EXPANDING_LEVEL_1: ZipMethod;
    static EXPANDING_LEVEL_2: ZipMethod;
    static EXPANDING_LEVEL_3: ZipMethod;
    static EXPANDING_LEVEL_4: ZipMethod;
    static IMPLODING: ZipMethod;
    static JPEG: ZipMethod;
    static LZMA: ZipMethod;
    static PKWARE_IMPLODING: ZipMethod;
    static PPMD: ZipMethod;
    static STORED: ZipMethod;
    static TOKENIZATION: ZipMethod;
    static UNKNOWN: ZipMethod;
    static UNSHRINKING: ZipMethod;
    static WAVPACK: ZipMethod;
    static XZ: ZipMethod;
    static ZSTD: ZipMethod;
    static ZSTD_DEPRECATED: ZipMethod;
    static getMethodByCode(paramarg0: number): ZipMethod;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ZipMethod;
    static values(): ZipMethod[];
    private constructor()
    private constructor(arg2: number)
    readonly code: number;
    getCode(): number;
    name(): "STORED" | "UNSHRINKING" | "EXPANDING_LEVEL_1" | "EXPANDING_LEVEL_2" | "EXPANDING_LEVEL_3" | "EXPANDING_LEVEL_4" | "IMPLODING" | "TOKENIZATION" | "DEFLATED" | "ENHANCED_DEFLATED" | "PKWARE_IMPLODING" | "BZIP2" | "LZMA" | "ZSTD_DEPRECATED" | "ZSTD" | "XZ" | "JPEG" | "WAVPACK" | "PPMD" | "AES_ENCRYPTED" | "UNKNOWN";
}
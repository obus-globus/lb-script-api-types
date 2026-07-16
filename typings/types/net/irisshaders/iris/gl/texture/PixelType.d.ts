import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { GlVersion } from '../../../../../net/irisshaders/iris/gl/GlVersion.d.ts'
export class PixelType extends Enum<PixelType> {
    static BYTE: PixelType;
    static FLOAT: PixelType;
    static HALF_FLOAT: PixelType;
    static INT: PixelType;
    static SHORT: PixelType;
    static UNSIGNED_BYTE: PixelType;
    static UNSIGNED_BYTE_2_3_3_REV: PixelType;
    static UNSIGNED_BYTE_3_3_2: PixelType;
    static UNSIGNED_INT: PixelType;
    static UNSIGNED_INT_10F_11F_11F_REV: PixelType;
    static UNSIGNED_INT_10_10_10_2: PixelType;
    static UNSIGNED_INT_2_10_10_10_REV: PixelType;
    static UNSIGNED_INT_5_9_9_9_REV: PixelType;
    static UNSIGNED_INT_8_8_8_8: PixelType;
    static UNSIGNED_INT_8_8_8_8_REV: PixelType;
    static UNSIGNED_SHORT: PixelType;
    static UNSIGNED_SHORT_1_5_5_5_REV: PixelType;
    static UNSIGNED_SHORT_4_4_4_4: PixelType;
    static UNSIGNED_SHORT_4_4_4_4_REV: PixelType;
    static UNSIGNED_SHORT_5_5_5_1: PixelType;
    static UNSIGNED_SHORT_5_6_5: PixelType;
    static UNSIGNED_SHORT_5_6_5_REV: PixelType;
    static fromString(paramarg0: string): Optional<PixelType>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PixelType;
    static values(): PixelType[];
    private constructor(arg2: number, arg3: number, arg4: GlVersion)
    readonly byteSize: number;
    readonly glFormat: number;
    readonly minimumGlVersion: GlVersion;
    getByteSize(): number;
    getGlFormat(): number;
    getMinimumGlVersion(): GlVersion;
    name(): "BYTE" | "SHORT" | "INT" | "HALF_FLOAT" | "FLOAT" | "UNSIGNED_BYTE" | "UNSIGNED_BYTE_3_3_2" | "UNSIGNED_BYTE_2_3_3_REV" | "UNSIGNED_SHORT" | "UNSIGNED_SHORT_5_6_5" | "UNSIGNED_SHORT_5_6_5_REV" | "UNSIGNED_SHORT_4_4_4_4" | "UNSIGNED_SHORT_4_4_4_4_REV" | "UNSIGNED_SHORT_5_5_5_1" | "UNSIGNED_SHORT_1_5_5_5_REV" | "UNSIGNED_INT" | "UNSIGNED_INT_8_8_8_8" | "UNSIGNED_INT_8_8_8_8_REV" | "UNSIGNED_INT_10_10_10_2" | "UNSIGNED_INT_2_10_10_10_REV" | "UNSIGNED_INT_10F_11F_11F_REV" | "UNSIGNED_INT_5_9_9_9_REV";
}
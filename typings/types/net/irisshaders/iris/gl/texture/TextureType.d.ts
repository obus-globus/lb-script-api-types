import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TextureType extends Enum<TextureType> {
    static TEXTURE_1D: TextureType;
    static TEXTURE_2D: TextureType;
    static TEXTURE_3D: TextureType;
    static TEXTURE_RECTANGLE: TextureType;
    static fromString(paramarg0: string): Optional<TextureType>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TextureType;
    static values(): TextureType[];
    private constructor(arg2: number)
    readonly glType: number;
    apply(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ByteBuffer): void;
    getGlType(): number;
    name(): "TEXTURE_1D" | "TEXTURE_2D" | "TEXTURE_3D" | "TEXTURE_RECTANGLE";
}
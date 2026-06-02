import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class ARBShadingLanguageInclude extends Object {
    static GL_NAMED_STRING_LENGTH_ARB: number;
    static GL_NAMED_STRING_TYPE_ARB: number;
    static GL_SHADER_INCLUDE_ARB: number;
    static glCompileShaderIncludeARB(paramarg0: number, paramarg1: PointerBuffer, paramarg2: number[]): void;
    static glCompileShaderIncludeARB(paramarg0: number, paramarg1: PointerBuffer, paramarg2: IntBuffer): void;
    static glDeleteNamedStringARB(paramarg0: CharSequence): void;
    static glDeleteNamedStringARB(paramarg0: ByteBuffer): void;
    static glGetNamedStringARB(paramarg0: CharSequence): string;
    static glGetNamedStringARB(paramarg0: CharSequence, paramarg1: number): string;
    static glGetNamedStringARB(paramarg0: CharSequence, paramarg1: number[], paramarg2: ByteBuffer): void;
    static glGetNamedStringARB(paramarg0: CharSequence, paramarg1: IntBuffer, paramarg2: ByteBuffer): void;
    static glGetNamedStringARB(paramarg0: ByteBuffer, paramarg1: number[], paramarg2: ByteBuffer): void;
    static glGetNamedStringARB(paramarg0: ByteBuffer, paramarg1: IntBuffer, paramarg2: ByteBuffer): void;
    static glGetNamedStringiARB(paramarg0: CharSequence, paramarg1: number): number;
    static glGetNamedStringivARB(paramarg0: CharSequence, paramarg1: number, paramarg2: number[]): void;
    static glGetNamedStringivARB(paramarg0: CharSequence, paramarg1: number, paramarg2: IntBuffer): void;
    static glGetNamedStringivARB(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number[]): void;
    static glGetNamedStringivARB(paramarg0: ByteBuffer, paramarg1: number, paramarg2: IntBuffer): void;
    static glIsNamedStringARB(paramarg0: CharSequence): boolean;
    static glIsNamedStringARB(paramarg0: ByteBuffer): boolean;
    static glNamedStringARB(paramarg0: number, paramarg1: CharSequence, paramarg2: CharSequence): void;
    static glNamedStringARB(paramarg0: number, paramarg1: ByteBuffer, paramarg2: ByteBuffer): void;
    static nglCompileShaderIncludeARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglDeleteNamedStringARB(paramarg0: number, paramarg1: number): void;
    static nglGetNamedStringARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nglGetNamedStringivARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nglIsNamedStringARB(paramarg0: number, paramarg1: number): boolean;
    static nglNamedStringARB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    constructor()
}
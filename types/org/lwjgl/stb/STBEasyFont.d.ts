import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class STBEasyFont extends Object {
    static nstb_easy_font_height(paramarg0: number): number;
    static nstb_easy_font_print(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): number;
    static nstb_easy_font_width(paramarg0: number): number;
    static stb_easy_font_height(paramarg0: CharSequence): number;
    static stb_easy_font_height(paramarg0: ByteBuffer): number;
    static stb_easy_font_print(paramarg0: number, paramarg1: number, paramarg2: CharSequence, paramarg3: ByteBuffer, paramarg4: ByteBuffer): number;
    static stb_easy_font_print(paramarg0: number, paramarg1: number, paramarg2: ByteBuffer, paramarg3: ByteBuffer, paramarg4: ByteBuffer): number;
    static stb_easy_font_spacing(paramarg0: number): void;
    static stb_easy_font_width(paramarg0: CharSequence): number;
    static stb_easy_font_width(paramarg0: ByteBuffer): number;
    constructor()
}
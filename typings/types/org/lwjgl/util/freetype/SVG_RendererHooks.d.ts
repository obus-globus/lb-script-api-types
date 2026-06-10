import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { SVG_Lib_Free_Func } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Free_Func.d.ts'
import type { SVG_Lib_Free_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Free_FuncI.d.ts'
import type { SVG_Lib_Init_Func } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Init_Func.d.ts'
import type { SVG_Lib_Init_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Init_FuncI.d.ts'
import type { SVG_Lib_Preset_Slot_Func } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Preset_Slot_Func.d.ts'
import type { SVG_Lib_Preset_Slot_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Preset_Slot_FuncI.d.ts'
import type { SVG_Lib_Render_Func } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Render_Func.d.ts'
import type { SVG_Lib_Render_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Render_FuncI.d.ts'
export class SVG_RendererHooks extends Struct<SVG_RendererHooks> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FREE_SVG: number;
    static INIT_SVG: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESET_SLOT: number;
    static RENDER_SVG: number;
    static SIZEOF: number;
    static calloc(): SVG_RendererHooks;
    static calloc(paramarg0: MemoryStack): SVG_RendererHooks;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): SVG_RendererHooks;
    static create(paramarg0: number): SVG_RendererHooks;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): SVG_RendererHooks;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): SVG_RendererHooks;
    static malloc(paramarg0: MemoryStack): SVG_RendererHooks;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nfree_svg(paramarg0: number): SVG_Lib_Free_Func;
    static nfree_svg(paramarg0: number, paramarg1: (param0: number) => void): void;
    static ninit_svg(paramarg0: number): SVG_Lib_Init_Func;
    static ninit_svg(paramarg0: number, paramarg1: (param0: number) => number): void;
    static npreset_slot(paramarg0: number): SVG_Lib_Preset_Slot_Func;
    static npreset_slot(paramarg0: number, paramarg1: (param0: number, param1: boolean, param2: number) => number): void;
    static nrender_svg(paramarg0: number): SVG_Lib_Render_Func;
    static nrender_svg(paramarg0: number, paramarg1: (param0: number, param1: number) => number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): SVG_RendererHooks;
    free_svg(): SVG_Lib_Free_Func;
    free_svg(arg0: (param0: number) => void): SVG_RendererHooks;
    init_svg(): SVG_Lib_Init_Func;
    init_svg(arg0: (param0: number) => number): SVG_RendererHooks;
    preset_slot(): SVG_Lib_Preset_Slot_Func;
    preset_slot(arg0: (param0: number, param1: boolean, param2: number) => number): SVG_RendererHooks;
    render_svg(): SVG_Lib_Render_Func;
    render_svg(arg0: (param0: number, param1: number) => number): SVG_RendererHooks;
    set(arg0: (param0: number) => number, arg1: (param0: number) => void, arg2: (param0: number, param1: number) => number, arg3: (param0: number, param1: boolean, param2: number) => number): SVG_RendererHooks;
    set(arg0: SVG_RendererHooks): SVG_RendererHooks;
    sizeof(): number;
}
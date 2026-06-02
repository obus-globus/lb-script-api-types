import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { MsgBoxCallbackI } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/msgbox/MsgBoxCallbackI.d.ts'
import type { MemoryStack } from '../../../../../../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct } from '../../../../../../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../../../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class MsgBoxParamSw extends Struct<MsgBoxParamSw> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static OFFSET_CB_SIZE: number;
    static OFFSET_DW_CONTEXT_HELP_ID: number;
    static OFFSET_DW_LANGUAGE_ID: number;
    static OFFSET_DW_STYLE: number;
    static OFFSET_HINSTANCE: number;
    static OFFSET_HWND_OWNER: number;
    static OFFSET_LPFN_MSG_BOX_CALLBACK: number;
    static OFFSET_LPSZ_CAPTION: number;
    static OFFSET_LPSZ_ICON: number;
    static OFFSET_LPSZ_TEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static allocate(paramarg0: MemoryStack): MsgBoxParamSw;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    private constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): MsgBoxParamSw;
    setCallback(arg0: (param0: number) => void): void;
    setCaption(arg0: ByteBuffer): void;
    setCbSize(arg0: number): void;
    setHWndOwner(arg0: number): void;
    setStyle(arg0: number): void;
    setText(arg0: ByteBuffer): void;
    sizeof(): number;
}
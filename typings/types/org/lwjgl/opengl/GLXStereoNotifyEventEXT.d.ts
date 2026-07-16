import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLXStereoNotifyEventEXT extends Struct<GLXStereoNotifyEventEXT> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static EVTYPE: number;
    static EXTENSION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEND_EVENT: number;
    static SERIAL: number;
    static SIZEOF: number;
    static STEREO_TREE: number;
    static TYPE: number;
    static WINDOW: number;
    static create(paramarg0: number): GLXStereoNotifyEventEXT;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLXStereoNotifyEventEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ndisplay(paramarg0: number): number;
    static nevtype(paramarg0: number): number;
    static nextension(paramarg0: number): number;
    static nsend_event(paramarg0: number): number;
    static nserial(paramarg0: number): number;
    static nstereo_tree(paramarg0: number): number;
    static ntype(paramarg0: number): number;
    static nwindow(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): GLXStereoNotifyEventEXT;
    display(): number;
    evtype(): number;
    extension(): number;
    send_event(): boolean;
    serial(): number;
    sizeof(): number;
    stereo_tree(): boolean;
    type(): number;
    window(): number;
}
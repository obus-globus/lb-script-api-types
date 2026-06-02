import type { PointerType } from '../../../../../com/sun/jna/PointerType.d.ts'
import type { X11$VisualID } from '../../../../../com/sun/jna/platform/unix/X11$VisualID.d.ts'
export class X11$Visual extends PointerType {
    constructor()
    getVisualID(): X11$VisualID;
    toString(): string;
}
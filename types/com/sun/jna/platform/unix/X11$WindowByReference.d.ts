import type { X11$Window } from '../../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { ByReference } from '../../../../../com/sun/jna/ptr/ByReference.d.ts'
export class X11$WindowByReference extends ByReference {
    constructor()
    getValue(): X11$Window;
}
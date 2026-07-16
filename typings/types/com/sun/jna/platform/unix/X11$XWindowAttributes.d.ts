import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { X11$Colormap } from '../../../../../com/sun/jna/platform/unix/X11$Colormap.d.ts'
import type { X11$Screen } from '../../../../../com/sun/jna/platform/unix/X11$Screen.d.ts'
import type { X11$Visual } from '../../../../../com/sun/jna/platform/unix/X11$Visual.d.ts'
import type { X11$Window } from '../../../../../com/sun/jna/platform/unix/X11$Window.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class X11$XWindowAttributes extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    all_event_masks: NativeLong;
    backing_pixel: NativeLong;
    backing_planes: NativeLong;
    backing_store: number;
    bit_gravity: number;
    border_width: number;
    c_class: number;
    colormap: X11$Colormap;
    depth: number;
    do_not_propagate_mask: NativeLong;
    height: number;
    map_installed: boolean;
    map_state: number;
    override_redirect: boolean;
    root: X11$Window;
    save_under: boolean;
    screen: X11$Screen;
    visual: X11$Visual;
    width: number;
    win_gravity: number;
    x: number;
    y: number;
    your_event_mask: NativeLong;
}
import type { Library } from '../../../../../com/sun/jna/Library.d.ts'
import type { X11$Display } from '../../../../../com/sun/jna/platform/unix/X11$Display.d.ts'
import type { X11$Visual } from '../../../../../com/sun/jna/platform/unix/X11$Visual.d.ts'
import type { X11$Xrender$XRenderPictFormat } from '../../../../../com/sun/jna/platform/unix/X11$Xrender$XRenderPictFormat.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface X11$Xrender extends Library, Object{
    XRenderFindVisualFormat(arg0: X11$Display, arg1: X11$Visual): X11$Xrender$XRenderPictFormat;
}
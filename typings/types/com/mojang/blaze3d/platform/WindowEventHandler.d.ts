import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WindowEventHandler extends Object{
    cursorEntered(): void;
    framebufferSizeChanged(): void;
    resizeGui(): void;
}
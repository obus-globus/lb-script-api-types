import type { Image } from '../../../java/awt/Image.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ImageObserver extends Object{
    imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
}
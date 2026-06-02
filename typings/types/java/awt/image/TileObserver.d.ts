import type { WritableRenderedImage } from '../../../java/awt/image/WritableRenderedImage.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TileObserver extends Object{
    tileUpdate(arg0: WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;
}
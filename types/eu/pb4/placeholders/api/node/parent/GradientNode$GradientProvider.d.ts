import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextColor } from '../../../../../../net/minecraft/network/chat/TextColor.d.ts'
export interface GradientNode$GradientProvider extends Object{
    getColorAt(arg0: number, arg1: number): TextColor;
}
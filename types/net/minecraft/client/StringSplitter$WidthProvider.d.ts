import type { Object } from '../../../java/lang/Object.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
export interface StringSplitter$WidthProvider extends Object{
    getWidth(codepoint: number, style: Style): number;
}
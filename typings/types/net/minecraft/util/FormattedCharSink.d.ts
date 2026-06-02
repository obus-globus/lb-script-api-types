import type { Object } from '../../../java/lang/Object.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
export interface FormattedCharSink extends Object{
    accept(position: number, style: Style, codepoint: number): boolean;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
export interface StringSplitter$LinePosConsumer extends Object{
    accept(style: Style, start: number, end: number): void;
}
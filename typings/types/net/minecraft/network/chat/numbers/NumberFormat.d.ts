import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { NumberFormatType } from '../../../../../net/minecraft/network/chat/numbers/NumberFormatType.d.ts'
export interface NumberFormat extends Object{
    format(value: number): MutableComponent;
    type(): NumberFormatType<NumberFormat>;
}
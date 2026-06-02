import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { NumberFormat } from '../../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { NumberFormatType } from '../../../../../net/minecraft/network/chat/numbers/NumberFormatType.d.ts'
export class BlankFormat extends Object implements NumberFormat {
    static INSTANCE: BlankFormat;
    static TYPE: NumberFormatType<BlankFormat>;
    private constructor()
    format(value: number): MutableComponent;
    type(): NumberFormatType<BlankFormat>;
}
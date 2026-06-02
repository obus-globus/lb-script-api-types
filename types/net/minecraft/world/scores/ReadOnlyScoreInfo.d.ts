import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
export interface ReadOnlyScoreInfo extends Object{
    formatValue(defaultFormat: NumberFormat): MutableComponent;
    isLocked(): boolean;
    numberFormat(): NumberFormat;
    value(): number;
}
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { NumberFormat } from '../../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { NumberFormatType } from '../../../../../net/minecraft/network/chat/numbers/NumberFormatType.d.ts'
export class FixedFormat extends Record implements NumberFormat {
    static TYPE: NumberFormatType<FixedFormat>;
    constructor(value: Component)
    // private value: Component;
    equals(o: Object | null): boolean;
    format(value: number): MutableComponent;
    hashCode(): number;
    toString(): string;
    type(): NumberFormatType<FixedFormat>;
    value(): Component;
}
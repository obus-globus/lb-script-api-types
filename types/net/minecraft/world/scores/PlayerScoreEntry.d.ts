import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
export class PlayerScoreEntry extends Record {
    // private display: Component;
    // private numberFormatOverride: NumberFormat;
    // private owner: string;
    // private value: number;
    display(): Component;
    equals(o: Object | null): boolean;
    formatValue(_default: NumberFormat): MutableComponent;
    hashCode(): number;
    isHidden(): boolean;
    numberFormatOverride(): NumberFormat;
    owner(): string;
    ownerName(): Component;
    toString(): string;
    value(): number;
}
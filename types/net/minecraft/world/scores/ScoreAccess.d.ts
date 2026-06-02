import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
export interface ScoreAccess extends Object{
    add(count: number): number;
    display(): Component;
    display(display: Component): void;
    get(): number;
    increment(): number;
    lock(): void;
    locked(): boolean;
    numberFormatOverride(numberFormat: NumberFormat): void;
    reset(): void;
    set(value: number): void;
    unlock(): void;
}
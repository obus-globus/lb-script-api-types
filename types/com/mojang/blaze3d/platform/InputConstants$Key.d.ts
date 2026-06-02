import type { InputConstants$Type } from '../../../../com/mojang/blaze3d/platform/InputConstants$Type.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class InputConstants$Key extends Object {
    private constructor(name: string, type: InputConstants$Type, value: number)
    readonly displayName: () => Component;
    readonly name: string;
    readonly type: InputConstants$Type;
    readonly value: number;
    equals(o: Object | null): boolean;
    getDisplayName(): Component;
    getName(): string;
    getNumericKeyValue(): OptionalInt;
    getType(): InputConstants$Type;
    getValue(): number;
    hashCode(): number;
    toString(): string;
}
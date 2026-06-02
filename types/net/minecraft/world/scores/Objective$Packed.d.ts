import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { NumberFormat } from '../../../../net/minecraft/network/chat/numbers/NumberFormat.d.ts'
import type { ObjectiveCriteria } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria.d.ts'
import type { ObjectiveCriteria$RenderType } from '../../../../net/minecraft/world/scores/criteria/ObjectiveCriteria$RenderType.d.ts'
export class Objective$Packed extends Record {
    static CODEC: Codec<Objective$Packed>;
    // private criteria: ObjectiveCriteria;
    // private displayAutoUpdate: boolean;
    // private displayName: Component;
    // private name: string;
    // private numberFormat: Optional<NumberFormat>;
    // private renderType: ObjectiveCriteria$RenderType;
    criteria(): ObjectiveCriteria;
    displayAutoUpdate(): boolean;
    displayName(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    numberFormat(): Optional<NumberFormat>;
    renderType(): ObjectiveCriteria$RenderType;
    toString(): string;
}
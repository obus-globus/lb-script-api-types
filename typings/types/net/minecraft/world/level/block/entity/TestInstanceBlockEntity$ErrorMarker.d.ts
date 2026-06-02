import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TestInstanceBlockEntity$ErrorMarker extends Record {
    static CODEC: Codec<TestInstanceBlockEntity$ErrorMarker>;
    static LIST_CODEC: Codec<Object>;
    constructor(pos: BlockPos, text: Component)
    // private pos: BlockPos;
    // private text: Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): BlockPos;
    text(): Component;
    toString(): string;
}
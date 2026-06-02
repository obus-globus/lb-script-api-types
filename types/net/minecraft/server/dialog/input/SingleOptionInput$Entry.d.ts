import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class SingleOptionInput$Entry extends Record {
    static CODEC: Codec<SingleOptionInput$Entry>;
    static FULL_CODEC: Codec<SingleOptionInput$Entry>;
    // private display: Optional<Component>;
    // private id: string;
    // private initial: boolean;
    display(): Optional<Component>;
    displayOrDefault(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): string;
    initial(): boolean;
    toString(): string;
}
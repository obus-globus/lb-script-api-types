import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class Message extends Record {
    static CODEC: Codec<Message>;
    constructor(literal: Optional<string>, translatable: Optional<string>, translatableParams: Optional<string[]>)
    // private literal: Optional<string>;
    // private translatable: Optional<string>;
    // private translatableParams: Optional<string[]>;
    asComponent(): Optional<Component>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    literal(): Optional<string>;
    toString(): string;
    translatable(): Optional<string>;
    translatableParams(): Optional<string[]>;
}
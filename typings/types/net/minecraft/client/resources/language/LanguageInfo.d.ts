import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class LanguageInfo extends Record {
    static CODEC: Codec<LanguageInfo>;
    // private bidirectional: boolean;
    // private name: string;
    // private region: string;
    bidirectional(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    region(): string;
    toComponent(): Component;
    toString(): string;
}
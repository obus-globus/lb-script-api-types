import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ChatType$Bound } from '../../../../net/minecraft/network/chat/ChatType$Bound.d.ts'
import type { ChatTypeDecoration$Parameter$Selector } from '../../../../net/minecraft/network/chat/ChatTypeDecoration$Parameter$Selector.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class ChatTypeDecoration$Parameter extends Enum<ChatTypeDecoration$Parameter> implements StringRepresentable {
    static CODEC: Codec<ChatTypeDecoration$Parameter>;
    static CONTENT: ChatTypeDecoration$Parameter;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SENDER: ChatTypeDecoration$Parameter;
    static STREAM_CODEC: StreamCodec<ByteBuf, ChatTypeDecoration$Parameter>;
    static TARGET: ChatTypeDecoration$Parameter;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChatTypeDecoration$Parameter;
    static values(): ChatTypeDecoration$Parameter[];
    private constructor(id: number, name: string, selector: ChatTypeDecoration$Parameter$Selector)
    // private id: number;
    // private name: string;
    // private selector: ChatTypeDecoration$Parameter$Selector;
    getSerializedName(): string;
    select(content: Component, chatType: ChatType$Bound): Component;
    name(): "SENDER" | "TARGET" | "CONTENT";
}
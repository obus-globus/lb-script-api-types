import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteTag } from '../../../net/minecraft/nbt/ByteTag.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { DoubleTag } from '../../../net/minecraft/nbt/DoubleTag.d.ts'
import type { EndTag } from '../../../net/minecraft/nbt/EndTag.d.ts'
import type { FloatTag } from '../../../net/minecraft/nbt/FloatTag.d.ts'
import type { IntTag } from '../../../net/minecraft/nbt/IntTag.d.ts'
import type { LongTag } from '../../../net/minecraft/nbt/LongTag.d.ts'
import type { ShortTag } from '../../../net/minecraft/nbt/ShortTag.d.ts'
import type { StringTag } from '../../../net/minecraft/nbt/StringTag.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { TagVisitor } from '../../../net/minecraft/nbt/TagVisitor.d.ts'
import type { TextComponentTagVisitor$Styling } from '../../../net/minecraft/nbt/TextComponentTagVisitor$Styling.d.ts'
import type { TextComponentTagVisitor$Token } from '../../../net/minecraft/nbt/TextComponentTagVisitor$Token.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
export class TextComponentTagVisitor extends Object implements TagVisitor {
    constructor(indentation: string)
    constructor(indentation: string, styling: TextComponentTagVisitor$Styling)
    constructor(indentation: string, styling: TextComponentTagVisitor$Styling, sortKeys: boolean)
    // private depth: number;
    // private indentDepth: number;
    // private indentation: string;
    // private result: MutableComponent;
    // private sortKeys: boolean;
    // private styling: TextComponentTagVisitor$Styling;
    // private append(string: string, style: Style): TextComponentTagVisitor;
    // private append(token: TextComponentTagVisitor$Token): TextComponentTagVisitor;
    // private append(component: Component): TextComponentTagVisitor;
    // private appendSubTag(tag: Tag, indent: boolean): void;
    // private handleEscapePretty(input: string): Component;
    visit(tag: Tag): Component;
    visitByte(tag: ByteTag): void;
    visitByteArray(tag: (Object | null)[]): void;
    visitCompound(tag: CompoundTag): void;
    visitDouble(tag: DoubleTag): void;
    visitEnd(tag: EndTag): void;
    visitFloat(tag: FloatTag): void;
    visitInt(tag: IntTag): void;
    visitIntArray(tag: (Object | null)[]): void;
    visitList(tag: (Object | null)[]): void;
    visitLong(tag: LongTag): void;
    visitLongArray(tag: (Object | null)[]): void;
    visitShort(tag: ShortTag): void;
    visitString(tag: StringTag): void;
}
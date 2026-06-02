import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { NametagTextFormatter$Part } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagTextFormatter$Part.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class NametagTextFormatter extends ValueGroup {
    static INSTANCE: NametagTextFormatter;
    // private BABY_TEXT: Component;
    // private BOT_STYLE: Style;
    // private BOT_TEXT: Component;
    // private COUNT_STYLE: Style;
    // private leftBracket: Component;
    // private parts: NametagTextFormatter$Part[];
    // private /*not mapped: */ getParts(): NametagTextFormatter$Part[];
    // private rightBracket: Component;
    format(entity: Entity): Component;
}
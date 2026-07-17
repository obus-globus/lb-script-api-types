import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AttributeModifiers1_20_5$AttributeModifier } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AttributeModifiers1_20_5$AttributeModifier.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AttributeModifiers1_20_5 extends Record implements Copyable, Rewritable {
    static TYPE: Type<AttributeModifiers1_20_5>;
    constructor(modifiers: AttributeModifiers1_20_5$AttributeModifier[], showInTooltip: boolean)
    // private modifiers: AttributeModifiers1_20_5$AttributeModifier[];
    // private showInTooltip: boolean;
    copy(): AttributeModifiers1_20_5;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modifiers(): AttributeModifiers1_20_5$AttributeModifier[];
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): AttributeModifiers1_20_5;
    showInTooltip(): boolean;
    toString(): string;
}
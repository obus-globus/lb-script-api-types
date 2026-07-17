import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Enchantments extends Record implements Copyable {
    static TYPE1_20_5: Type<Enchantments>;
    static TYPE1_21_5: Type<Enchantments>;
    constructor(arg0: JavaMap<any, any>)
    constructor(enchantments: JavaMap<any, any>, showInTooltip: boolean)
    constructor(arg0: boolean)
    // private enchantments: JavaMap<any, any>;
    // private showInTooltip: boolean;
    add(arg0: number, arg1: number): void;
    clear(): void;
    copy(): Enchantments;
    enchantments(): JavaMap<any, any>;
    equals(arg0: Object | null): boolean;
    getLevel(arg0: number): number;
    hashCode(): number;
    remove(arg0: number): void;
    showInTooltip(): boolean;
    size(): number;
    toString(): string;
}
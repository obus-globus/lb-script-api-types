import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BlockStateProperties extends Record implements Copyable {
    static TYPE: Type<BlockStateProperties>;
    constructor(properties: { [key: string]: string })
    // private properties: { [key: string]: string };
    copy(): BlockStateProperties;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    properties(): { [key: string]: string };
    toString(): string;
}
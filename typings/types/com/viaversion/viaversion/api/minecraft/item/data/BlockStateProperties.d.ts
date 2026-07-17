import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BlockStateProperties extends Record implements Copyable {
    static TYPE: Type<BlockStateProperties>;
    constructor(properties: JavaMap<string, string>)
    // private properties: JavaMap<string, string>;
    copy(): BlockStateProperties;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    properties(): JavaMap<string, string>;
    toString(): string;
}
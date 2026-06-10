import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { IntSupplier } from '../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureType } from '../../../../../net/irisshaders/iris/gl/texture/TextureType.d.ts'
export class TexturePair extends Record {
    constructor(type: TextureType, id: () => number)
    // private id: () => number;
    // private type: TextureType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): () => number;
    toString(): string;
    type(): TextureType;
}
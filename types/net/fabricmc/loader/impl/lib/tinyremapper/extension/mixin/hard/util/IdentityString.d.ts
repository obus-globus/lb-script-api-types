import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { IConvertibleString } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/util/IConvertibleString.d.ts'
export class IdentityString extends Object implements IConvertibleString {
    constructor(arg0: string)
    // private text: string;
    getConverted(): string;
    getReverted(arg0: string): string;
}
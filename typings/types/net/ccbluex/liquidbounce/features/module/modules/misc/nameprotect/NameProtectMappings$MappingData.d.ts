import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class NameProtectMappings$MappingData extends Object {
    constructor(newName: string, colorGetter: () => Color4b)
    readonly colorGetter: () => Color4b;
    readonly newName: string;
}
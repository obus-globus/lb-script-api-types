import type { FontDescription } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/font/FontDescription.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ObjectComponent$ObjectInfo extends Object{
    getDescription(): string;
    getUpdatedFont(): FontDescription;
}
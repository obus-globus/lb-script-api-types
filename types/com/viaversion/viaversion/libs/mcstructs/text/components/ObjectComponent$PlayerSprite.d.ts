import type { SerializedData } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/SerializedData.d.ts'
import type { ObjectComponent$ObjectInfo } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ObjectComponent$ObjectInfo.d.ts'
import type { FontDescription } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/font/FontDescription.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ObjectComponent$PlayerSprite extends Object implements ObjectComponent$ObjectInfo {
    constructor(arg0: SerializedData<Object>, arg1: boolean)
    readonly hat: boolean;
    readonly profile: SerializedData<Object>;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getDescription(): string;
    getProfile(): SerializedData<Object>;
    getUpdatedFont(): FontDescription;
    hashCode(): number;
    isHat(): boolean;
    setHat(arg0: boolean): void;
    setProfile(arg0: SerializedData<Object>): void;
    toString(): string;
}
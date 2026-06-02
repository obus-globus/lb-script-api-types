import type { RealmsSetting } from '../../../../com/mojang/realmsclient/dto/RealmsSetting.d.ts'
import type { RealmsWorldOptions } from '../../../../com/mojang/realmsclient/dto/RealmsWorldOptions.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsSlot extends Object implements ReflectionBasedSerialization {
    static defaults(paramslotId: number): RealmsSlot;
    constructor(slotId: number, options: RealmsWorldOptions, settings: RealmsSetting[])
    options: RealmsWorldOptions;
    settings: RealmsSetting[];
    slotId: number;
    copy(): RealmsSlot;
    isHardcore(): boolean;
}
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { TextProvider } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/TextProvider.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class DeferMode extends Enum<DeferMode> implements TextProvider {
    static ALWAYS: DeferMode;
    static ONE_FRAME: DeferMode;
    static ZERO_FRAMES: DeferMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DeferMode;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private name: Component;
    allowsUnlimitedUploadDuration(): boolean;
    getLocalizedName(): Component;
    name(): "ALWAYS" | "ONE_FRAME" | "ZERO_FRAMES";
}
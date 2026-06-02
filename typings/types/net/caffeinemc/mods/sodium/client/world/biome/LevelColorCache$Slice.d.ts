import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BoxBlur$ColorBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/color/BoxBlur$ColorBuffer.d.ts'
export class LevelColorCache$Slice extends Object {
    private constructor(arg0: number)
    readonly buffer: BoxBlur$ColorBuffer;
    // private lastPopulateStamp: number;
    getBuffer(): BoxBlur$ColorBuffer;
}
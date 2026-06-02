import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { Sorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/Sorter.d.ts'
import type { NativeBuffer } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export class SharedIndexSorter extends Record implements Sorter {
    // private quadCount: number;
    destroy(): void;
    equals(arg0: Object | null): boolean;
    getIndexBuffer(): NativeBuffer;
    getIntBuffer(): IntBuffer;
    hashCode(): number;
    quadCount(): number;
    toString(): string;
    writeIndexBuffer(arg0: CombinedCameraPos, arg1: boolean): void;
}
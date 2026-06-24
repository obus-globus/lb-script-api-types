import type { IntBuffer } from '../../../../../../../../../java/nio/IntBuffer.d.ts'
import type { IntConsumer } from '../../../../../../../../../java/util/function/IntConsumer.d.ts'
import type { CombinedCameraPos } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/CombinedCameraPos.d.ts'
import type { DynamicSorter } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicSorter.d.ts'
import type { DynamicTopoData } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/DynamicTopoData.d.ts'
export class DynamicTopoData$DynamicTopoSorter extends DynamicSorter implements IntConsumer {
    private constructor(null_: DynamicTopoData, arg1: number, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean)
    // private GFNITrigger: boolean;
    // private consecutiveTopoSortFailures: number;
    // private consecutiveTopoSortFailuresNew: number;
    // private directTrigger: boolean;
    readonly intBuffer: IntBuffer;
    // private isDirectTrigger: boolean;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    // private hasSortFailureIncrement(): boolean;
    // private hasSortFailureReset(): boolean;
    writeSort(arg0: CombinedCameraPos, arg1: boolean): void;
}
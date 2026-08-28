import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * A training sample that can write its values directly into flat arrays.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt:23}
 */
export interface TrainingSample extends Object{
    readonly asInput: number[];
    readonly asOutput: number[];
    /**
     * Number of input values in this sample.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt:31}
     */
    readonly inputSize: number;
    /**
     * Number of output values in this sample.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt:39}
     */
    readonly outputSize: number;
    /**
     * Writes input values at {@link fromIndex} and returns the exclusive end index.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt:42}
     */
    fillAsInput(dest: number[], fromIndex: number): number;
    /**
     * Writes output values at {@link fromIndex} and returns the exclusive end index.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/deeplearn/data/TrainingSample.kt:45}
     */
    fillAsOutput(dest: number[], fromIndex: number): number;
}
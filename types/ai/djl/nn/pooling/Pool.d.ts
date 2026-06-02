import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Pool extends Object {
    static avgPool1d(paramarg0: NDArray, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean, paramarg5: boolean): NDArray;
    static avgPool1dBlock(paramarg0: Shape): Block;
    static avgPool1dBlock(paramarg0: Shape, paramarg1: Shape): Block;
    static avgPool1dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape): Block;
    static avgPool1dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean): Block;
    static avgPool1dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean, paramarg4: boolean): Block;
    static avgPool2d(paramarg0: NDArray, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean, paramarg5: boolean): NDArray;
    static avgPool2dBlock(paramarg0: Shape): Block;
    static avgPool2dBlock(paramarg0: Shape, paramarg1: Shape): Block;
    static avgPool2dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape): Block;
    static avgPool2dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean): Block;
    static avgPool2dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean, paramarg4: boolean): Block;
    static avgPool3d(paramarg0: NDArray, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean, paramarg5: boolean): NDArray;
    static avgPool3dBlock(paramarg0: Shape): Block;
    static avgPool3dBlock(paramarg0: Shape, paramarg1: Shape): Block;
    static avgPool3dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape): Block;
    static avgPool3dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean): Block;
    static avgPool3dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean, paramarg4: boolean): Block;
    static globalAvgPool1d(paramarg0: NDArray): NDArray;
    static globalAvgPool1dBlock(): Block;
    static globalAvgPool2d(paramarg0: NDArray): NDArray;
    static globalAvgPool2dBlock(): Block;
    static globalAvgPool3d(paramarg0: NDArray): NDArray;
    static globalAvgPool3dBlock(): Block;
    static globalLpPool1d(paramarg0: NDArray, paramarg1: number): NDArray;
    static globalLpPool1dBlock(paramarg0: number): Block;
    static globalLpPool2d(paramarg0: NDArray, paramarg1: number): NDArray;
    static globalLpPool2dBlock(paramarg0: number): Block;
    static globalLpPool3d(paramarg0: NDArray, paramarg1: number): NDArray;
    static globalLpPool3dBlock(paramarg0: number): Block;
    static globalMaxPool1d(paramarg0: NDArray): NDArray;
    static globalMaxPool1dBlock(): Block;
    static globalMaxPool2d(paramarg0: NDArray): NDArray;
    static globalMaxPool2dBlock(): Block;
    static globalMaxPool3d(paramarg0: NDArray): NDArray;
    static globalMaxPool3dBlock(): Block;
    static lpPool1d(paramarg0: NDArray, paramarg1: number, paramarg2: Shape, paramarg3: Shape, paramarg4: Shape, paramarg5: boolean): NDArray;
    static lpPool1dBlock(paramarg0: number, paramarg1: Shape): Block;
    static lpPool1dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape): Block;
    static lpPool1dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean): Block;
    static lpPool2d(paramarg0: NDArray, paramarg1: number, paramarg2: Shape, paramarg3: Shape, paramarg4: Shape, paramarg5: boolean): NDArray;
    static lpPool2dBlock(paramarg0: number, paramarg1: Shape): Block;
    static lpPool2dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape): Block;
    static lpPool2dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape): Block;
    static lpPool2dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean): Block;
    static lpPool3d(paramarg0: NDArray, paramarg1: number, paramarg2: Shape, paramarg3: Shape, paramarg4: Shape, paramarg5: boolean): NDArray;
    static lpPool3dBlock(paramarg0: number, paramarg1: Shape): Block;
    static lpPool3dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape): Block;
    static lpPool3dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape): Block;
    static lpPool3dBlock(paramarg0: number, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean): Block;
    static maxPool1d(paramarg0: NDArray, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean): NDArray;
    static maxPool1dBlock(paramarg0: Shape): Block;
    static maxPool1dBlock(paramarg0: Shape, paramarg1: Shape): Block;
    static maxPool1dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape): Block;
    static maxPool1dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean): Block;
    static maxPool2d(paramarg0: NDArray, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean): NDArray;
    static maxPool2dBlock(paramarg0: Shape): Block;
    static maxPool2dBlock(paramarg0: Shape, paramarg1: Shape): Block;
    static maxPool2dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape): Block;
    static maxPool2dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean): Block;
    static maxPool3d(paramarg0: NDArray, paramarg1: Shape, paramarg2: Shape, paramarg3: Shape, paramarg4: boolean): NDArray;
    static maxPool3dBlock(paramarg0: Shape): Block;
    static maxPool3dBlock(paramarg0: Shape, paramarg1: Shape): Block;
    static maxPool3dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape): Block;
    static maxPool3dBlock(paramarg0: Shape, paramarg1: Shape, paramarg2: Shape, paramarg3: boolean): Block;
    private constructor()
}
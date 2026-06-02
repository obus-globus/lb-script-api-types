import type { Image$Interpolation } from '../../../../../ai/djl/modality/cv/Image$Interpolation.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Shape } from '../../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NDImageUtils extends Object {
    static centerCrop(paramarg0: NDArray): NDArray;
    static centerCrop(paramarg0: NDArray, paramarg1: number, paramarg2: number): NDArray;
    static crop(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): NDArray;
    static isCHW(paramarg0: Shape): boolean;
    static normalize(paramarg0: NDArray, paramarg1: number, paramarg2: number): NDArray;
    static normalize(paramarg0: NDArray, paramarg1: number[], paramarg2: number[]): NDArray;
    static randomBrightness(paramarg0: NDArray, paramarg1: number): NDArray;
    static randomColorJitter(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): NDArray;
    static randomFlipLeftRight(paramarg0: NDArray): NDArray;
    static randomFlipTopBottom(paramarg0: NDArray): NDArray;
    static randomHue(paramarg0: NDArray, paramarg1: number): NDArray;
    static randomResizedCrop(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): NDArray;
    static resize(paramarg0: NDArray, paramarg1: number): NDArray;
    static resize(paramarg0: NDArray, paramarg1: number, paramarg2: number): NDArray;
    static resize(paramarg0: NDArray, paramarg1: number, paramarg2: number, paramarg3: Image$Interpolation): NDArray;
    static rotate90(paramarg0: NDArray, paramarg1: number): NDArray;
    static toTensor(paramarg0: NDArray): NDArray;
    private constructor()
}
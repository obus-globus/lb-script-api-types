import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Activation extends Object {
    static elu(paramarg0: NDArray, paramarg1: number): NDArray;
    static elu(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static eluBlock(paramarg0: number): Block;
    static gelu(paramarg0: NDArray): NDArray;
    static gelu(paramarg0: (Object | null)[]): (Object | null)[];
    static geluBlock(): Block;
    static leakyRelu(paramarg0: NDArray, paramarg1: number): NDArray;
    static leakyRelu(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static leakyReluBlock(paramarg0: number): Block;
    static mish(paramarg0: NDArray): NDArray;
    static mish(paramarg0: (Object | null)[]): (Object | null)[];
    static mishBlock(): Block;
    static preluBlock(): Block;
    static relu(paramarg0: NDArray): NDArray;
    static relu(paramarg0: (Object | null)[]): (Object | null)[];
    static relu6(paramarg0: NDArray): NDArray;
    static relu6(paramarg0: (Object | null)[]): (Object | null)[];
    static relu6Block(): Block;
    static reluBlock(): Block;
    static selu(paramarg0: NDArray): NDArray;
    static selu(paramarg0: (Object | null)[]): (Object | null)[];
    static seluBlock(): Block;
    static sigmoid(paramarg0: NDArray): NDArray;
    static sigmoid(paramarg0: (Object | null)[]): (Object | null)[];
    static sigmoidBlock(): Block;
    static softPlus(paramarg0: NDArray): NDArray;
    static softPlus(paramarg0: (Object | null)[]): (Object | null)[];
    static softPlusBlock(): Block;
    static softSign(paramarg0: NDArray): NDArray;
    static softSign(paramarg0: (Object | null)[]): (Object | null)[];
    static softSignBlock(): Block;
    static swish(paramarg0: NDArray, paramarg1: number): NDArray;
    static swish(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static swishBlock(paramarg0: number): Block;
    static tanh(paramarg0: NDArray): NDArray;
    static tanh(paramarg0: (Object | null)[]): (Object | null)[];
    static tanhBlock(): Block;
    private constructor()
}
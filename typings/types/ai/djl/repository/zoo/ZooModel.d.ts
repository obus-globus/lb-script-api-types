import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Model } from '../../../../ai/djl/Model.d.ts'
import type { Predictor } from '../../../../ai/djl/inference/Predictor.d.ts'
import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { Trainer } from '../../../../ai/djl/training/Trainer.d.ts'
import type { TrainingConfig } from '../../../../ai/djl/training/TrainingConfig.d.ts'
import type { Translator } from '../../../../ai/djl/translate/Translator.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ZooModel<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends Object implements Model {
    static newInstance(paramarg0: string): Model;
    static newInstance(paramarg0: string, paramarg1: Device): Model;
    static newInstance(paramarg0: string, paramarg1: Device, paramarg2: string): Model;
    static newInstance(paramarg0: string, paramarg1: string): Model;
    constructor(arg0: Model, arg1: Translator<I, O>)
    // private model: Model;
    readonly translator: Translator<I, O>;
    cast(arg0: DataType): void;
    close(): void;
    describeInput(): Pair<string, Shape>[];
    describeOutput(): Pair<string, Shape>[];
    getArtifact(arg0: string): URL;
    getArtifact<T extends Object | number | string | boolean>(arg0: string, arg1: (param0: InputStream) => T): T;
    getArtifactAsStream(arg0: string): InputStream;
    getArtifactNames(): string[];
    getBlock(): Block;
    getDataType(): DataType;
    getModelPath(): Path[];
    getNDManager(): NDManager;
    getName(): string;
    getProperties(): { [key: string]: string };
    getProperty(arg0: string, arg1: string): string;
    getProperty(arg0: string): string;
    getTranslator(): Translator<I, O>;
    getWrappedModel(): Model;
    intProperty(arg0: string, arg1: number): number;
    load(arg0: InputStream): void;
    load(arg0: Path[]): void;
    load(arg0: Path[], arg1: string): void;
    load(arg0: InputStream, arg1: { [key: string]: Object | null }): void;
    load(arg0: Path[], arg1: string, arg2: { [key: string]: Object | null }): void;
    longProperty(arg0: string, arg1: number): number;
    newPredictor(arg0: Translator<I, O>): Predictor<I, O>;
    newPredictor(): Predictor<I, O>;
    newPredictor(arg0: Device): Predictor<I, O>;
    newPredictor<P extends Object | number | string | boolean, Q extends Object | number | string | boolean>(arg0: Translator<P, Q>, arg1: Device): Predictor<P, Q>;
    newTrainer(arg0: TrainingConfig): Trainer;
    quantize(): void;
    save(arg0: Path[], arg1: string): void;
    setBlock(arg0: Block): void;
    setDataType(arg0: DataType): void;
    setProperty(arg0: string, arg1: string): void;
}
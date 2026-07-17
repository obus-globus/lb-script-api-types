import type { JavaMap } from '../../JavaMap.d.ts'
import type { Device } from '../../ai/djl/Device.d.ts'
import type { Predictor } from '../../ai/djl/inference/Predictor.d.ts'
import type { NDManager } from '../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../ai/djl/ndarray/types/Shape.d.ts'
import type { Block } from '../../ai/djl/nn/Block.d.ts'
import type { Trainer } from '../../ai/djl/training/Trainer.d.ts'
import type { TrainingConfig } from '../../ai/djl/training/TrainingConfig.d.ts'
import type { Translator } from '../../ai/djl/translate/Translator.d.ts'
import type { Pair } from '../../ai/djl/util/Pair.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { Path } from '../../java/nio/file/Path.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Model extends AutoCloseable, Object {
    cast(arg0: DataType): void;
    close(): void;
    describeInput(): Pair<string, Shape>[];
    describeOutput(): Pair<string, Shape>[];
    getArtifact(arg0: string): URL;
    getArtifact<T extends unknown>(arg0: string, arg1: (param0: InputStream) => T): T;
    getArtifactAsStream(arg0: string): InputStream;
    getArtifactNames(): string[];
    getBlock(): Block;
    getDataType(): DataType;
    getModelPath(): Path;
    getNDManager(): NDManager;
    getName(): string;
    getProperties(): JavaMap<string, string>;
    getProperty(arg0: string): string;
    getProperty(arg0: string, arg1: string): string;
    intProperty(arg0: string, arg1: number): number;
    load(arg0: InputStream): void;
    load(arg0: InputStream, arg1: JavaMap<string, Object | null>): void;
    load(arg0: Path): void;
    load(arg0: Path, arg1: string): void;
    load(arg0: Path, arg1: string, arg2: JavaMap<string, Object | null>): void;
    longProperty(arg0: string, arg1: number): number;
    newPredictor<I extends unknown, O extends unknown>(arg0: Translator<I, O>): Predictor<I, O>;
    newPredictor<I extends unknown, O extends unknown>(arg0: Translator<I, O>, arg1: Device): Predictor<I, O>;
    newTrainer(arg0: TrainingConfig): Trainer;
    quantize(): void;
    save(arg0: Path, arg1: string): void;
    setBlock(arg0: Block): void;
    setDataType(arg0: DataType): void;
    setProperty(arg0: string, arg1: string): void;
}
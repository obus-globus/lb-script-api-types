import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Application } from '../../../../ai/djl/Application.d.ts'
import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { Criteria$Builder } from '../../../../ai/djl/repository/zoo/Criteria$Builder.d.ts'
import type { ModelLoader } from '../../../../ai/djl/repository/zoo/ModelLoader.d.ts'
import type { ModelZoo } from '../../../../ai/djl/repository/zoo/ModelZoo.d.ts'
import type { ZooModel } from '../../../../ai/djl/repository/zoo/ZooModel.d.ts'
import type { TranslatorFactory } from '../../../../ai/djl/translate/TranslatorFactory.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Criteria<I extends unknown, O extends unknown> extends Object {
    static builder(): Criteria$Builder<Object, Object>;
    constructor(arg0: Criteria$Builder<I, O>)
    readonly application: Application;
    readonly arguments: JavaMap<string, Object>;
    readonly artifactId: string;
    readonly block: Block;
    readonly device: Device;
    readonly engine: string;
    // private factory: TranslatorFactory;
    readonly filters: JavaMap<string, string>;
    readonly groupId: string;
    readonly inputClass: Class<I>;
    readonly modelName: string;
    readonly modelZoo: ModelZoo;
    readonly options: JavaMap<string, string>;
    readonly outputClass: Class<O>;
    readonly progress: Progress;
    // private resolvedLoaders: ModelLoader[];
    downloadModel(): void;
    getApplication(): Application;
    getArguments(): JavaMap<string, Object>;
    getArtifactId(): string;
    getBlock(): Block;
    getDevice(): Device;
    getEngine(): string;
    getFilters(): JavaMap<string, string>;
    getGroupId(): string;
    getInputClass(): Class<I>;
    getModelName(): string;
    getModelZoo(): ModelZoo;
    getOptions(): JavaMap<string, string>;
    getOutputClass(): Class<O>;
    getProgress(): Progress;
    getTranslatorFactory(): TranslatorFactory;
    isDownloaded(): boolean;
    loadModel(): ZooModel<I, O>;
    // private resolveModelLoaders(): ModelLoader[];
    toBuilder(): Criteria$Builder<I, O>;
    toString(): string;
}
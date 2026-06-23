import type { Application } from '../../../../ai/djl/Application.d.ts'
import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Model } from '../../../../ai/djl/Model.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { MRL } from '../../../../ai/djl/repository/MRL.d.ts'
import type { Criteria } from '../../../../ai/djl/repository/zoo/Criteria.d.ts'
import type { ModelLoader } from '../../../../ai/djl/repository/zoo/ModelLoader.d.ts'
import type { ZooModel } from '../../../../ai/djl/repository/zoo/ZooModel.d.ts'
import type { TranslatorFactory } from '../../../../ai/djl/translate/TranslatorFactory.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BaseModelLoader extends Object implements ModelLoader {
    constructor(arg0: MRL)
    // private defaultFactory: TranslatorFactory;
    mrl: MRL;
    createModel(arg0: Path[], arg1: string, arg2: Device, arg3: Block, arg4: { [key: string]: Object }, arg5: string): Model;
    downloadModel<I extends unknown, O extends unknown>(arg0: Criteria<I, O>, arg1: Progress): void;
    getApplication(): Application;
    getArtifactId(): string;
    // private getFactoryLookupErrorMessage(arg0: TranslatorFactory): string;
    getGroupId(): string;
    getMrl(): MRL;
    getTranslatorFactory(arg0: Criteria<Object, Object>, arg1: { [key: string]: Object }): TranslatorFactory;
    isDownloaded<I extends unknown, O extends unknown>(arg0: Criteria<I, O>): boolean;
    loadModel<I extends unknown, O extends unknown>(arg0: Criteria<I, O>): ZooModel<I, O>;
    // private loadServingProperties(arg0: Path[], arg1: { [key: string]: Object }, arg2: { [key: string]: string }): void;
    toString(): string;
}
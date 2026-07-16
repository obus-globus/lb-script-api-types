import type { Application } from '../../../../ai/djl/Application.d.ts'
import type { Device } from '../../../../ai/djl/Device.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { Criteria } from '../../../../ai/djl/repository/zoo/Criteria.d.ts'
import type { ModelZoo } from '../../../../ai/djl/repository/zoo/ModelZoo.d.ts'
import type { Translator } from '../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorFactory } from '../../../../ai/djl/translate/TranslatorFactory.d.ts'
import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Criteria$Builder<I extends unknown, O extends unknown> extends Object {
    constructor()
    // private application: Application;
    // private arguments: { [key: string]: Object };
    // private artifactId: string;
    // private block: Block;
    // private device: Device;
    // private engine: string;
    // private factory: TranslatorFactory;
    // private filters: { [key: string]: string };
    // private groupId: string;
    // private inputClass: Class<I>;
    // private modelName: string;
    // private modelZoo: ModelZoo;
    // private options: { [key: string]: string };
    // private outputClass: Class<O>;
    // private progress: Progress;
    // private translator: Translator<I, O>;
    build(): Criteria<I, O>;
    optApplication(arg0: Application): Criteria$Builder<I, O>;
    optArgument(arg0: string, arg1: Object): Criteria$Builder<I, O>;
    optArguments(arg0: { [key: string]: Object }): Criteria$Builder<I, O>;
    optArtifactId(arg0: string): Criteria$Builder<I, O>;
    optBlock(arg0: Block): Criteria$Builder<I, O>;
    optDevice(arg0: Device): Criteria$Builder<I, O>;
    optEngine(arg0: string): Criteria$Builder<I, O>;
    optFilter(arg0: string, arg1: string): Criteria$Builder<I, O>;
    optFilters(arg0: { [key: string]: string }): Criteria$Builder<I, O>;
    optGroupId(arg0: string): Criteria$Builder<I, O>;
    optModelName(arg0: string): Criteria$Builder<I, O>;
    optModelPath(arg0: Path): Criteria$Builder<I, O>;
    optModelUrls(arg0: string): Criteria$Builder<I, O>;
    optModelZoo(arg0: ModelZoo): Criteria$Builder<I, O>;
    optOption(arg0: string, arg1: string): Criteria$Builder<I, O>;
    optOptions(arg0: { [key: string]: string }): Criteria$Builder<I, O>;
    optProgress(arg0: Progress): Criteria$Builder<I, O>;
    optTranslator(arg0: Translator<I, O>): Criteria$Builder<I, O>;
    optTranslatorFactory(arg0: TranslatorFactory): Criteria$Builder<I, O>;
    setTypes<P extends unknown, Q extends unknown>(arg0: Class<P>, arg1: Class<Q>): Criteria$Builder<P, Q>;
}